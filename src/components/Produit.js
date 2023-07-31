import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import axios from 'axios';

function Produit({produit}) {
    const [isEditing, setIsEditing] = useState(false);
    const [oldProduit, setOldProduit] = useState({
        nom: '',
        date: new Date()
    })
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = (id) => {
        setShow(true);
    }

    function dateParser(date) {
        let newDate = new Date(date).toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        })

        return newDate;
    }

    const handleChange = ({ currentTarget }) => {
        const {name, value} = currentTarget;
        setOldProduit({...produit, [name]: value})
    }

    const handleDelete = (id) => {
        console.log('reussi')
        axios.delete("http://localhost:3001/produits/" + id);
        window.location.reload();
    };

    const handleSubmit = () => {
        
        axios.put("http://localhost:3001/produits/" + produit.id, oldProduit)
            .then(() => {
                setIsEditing(false);
            }
        );
    };

    return (
        <>
            <tr>
                <td>{produit.id}</td>
                <td>{produit.nom}</td>
                <td>{dateParser(produit.date)}</td>
                <td class="align-btn">
                    <button type="button" onClick={handleShow} className="btn btn-info w-100" variant="info">
                        Update
                    </button>
                    <button 
                        className="btn btn-danger w-100" 
                        variant="danger"
                        type="button"
                        onClick={() => {
                            console.log('clique')
                            if (window.confirm('Voulez-vous vraiment supprimer ce produit ?')) {
                                handleDelete(produit.id);
                            }
                        }}
                    >
                        Delete
                    </button>
                </td>
            </tr>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modifier le {produit.nom}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Modifier le nom</Form.Label>
                            <Form.Control type="text" name='nom' onChange={(e) => setOldProduit(e.target.value)} value={produit.nom} />
                        </Form.Group>
                        <Button type='submit' variant="primary">
                            Mettre à jour
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Produit;