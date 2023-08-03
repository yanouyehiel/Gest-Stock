import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import axios from 'axios';

function Produit({produit}) {
    const [newProduit, setNewProduit] = useState({
        id: produit.id,
        nom: produit.nom,
        date: Date.now()
    })
    const [show, setShow] = useState(false);
    const url_api = 'https://www.oncheckcm.com/api-gest-stock';

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }

    function dateParser(date) {
        let newDate = new Date(date).toLocaleDateString('fr-FR', {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        })

        return newDate;
    }

    const handleDelete = (id) => {
        axios
            .get(`${url_api}/products.php?delete=${id}`)
            .then(() => window.location.reload())
        ;
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .get(`${url_api}/products.php?update=${newProduit.id}&nom=${newProduit.nom}&date=${Date.now()}`)
            .then(() => window.location.reload())
        ;
    };

    return (
        <>
            <tr>
                <td>{produit.id}</td>
                <td>{produit.nom}</td>
                <td>{dateParser(parseInt(produit.date))}</td>
                <td class="align-btn">
                    <button type="button" onClick={handleShow} className="btn btn-info w-100" variant="info">
                        Update
                    </button>
                    <button 
                        className="btn btn-danger w-100" 
                        variant="danger"
                        type="button"
                        onClick={() => {
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
                            <Form.Control type="text" onChange={(e) => setNewProduit(e.target.value)} value={newProduit.nom} />
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