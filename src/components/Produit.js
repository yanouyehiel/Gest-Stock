import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import axios from 'axios';
import DeleteProduit from "./DeleteProduit";

function Produit({produit}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditContent] = useState("");
    const [nom, setNom] = useState('')
    const [prix, setPrix] = useState(0)
    const [stock, setStock] = useState(0)
    const [description, setDescription] = useState('')
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = (id) => {
        setShow(true);
    }

    const handleDelete = (id) => {
        console.log('reussi')
        axios.delete("http://localhost:3001/produits/" + id);
        window.location.reload();
    };

    const handleEdit = () => {
        const newValue = {
            nom: produit.nom,
            prix: produit.prix,
            stock: produit.stock,
            description: editedContent ? editedContent : produit.description,
            date: produit.date
        };

        axios.put("http://localhost:3001/produits/" + produit.id, newValue)
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
                <td>{produit.prix} FCFA</td>
                <td>{produit.description}</td>
                <td>{produit.stock}</td>
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
                    <Form onSubmit={handleEdit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Modifier le nom</Form.Label>
                            <Form.Control type="text" onChange={(e) => setNom(e.target.value)} value={produit.nom} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Modifier le prix</Form.Label>
                            <Form.Control type="number" onChange={(e) => setPrix(e.target.value)} value={produit.prix} autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Modifier la quantite</Form.Label>
                            <Form.Control type="number" onChange={(e) => setStock(e.target.value)} value={produit.stock} autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Modifer la description</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={(e) => setDescription(e.target.value)} value={produit.description} autoFocus />
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