import Entree from "../components/Entree";
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Button, Form, Modal } from "react-bootstrap";
import { useState } from 'react';

function ListeEntrees() {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }

    return (
        <>
            <Header />
            <Sidebar />

            <main id="main" class="main">
                <div class="pagetitle">
                    <h1>Interface de gestion du stock</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/home">Accueil</a></li>
                            <li class="breadcrumb-item active">Gestion des entrées</li>
                        </ol>
                    </nav>
                </div>

                <section class="section dashboard">
                    <div class="row">

                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Visualiser toutes le entrées enregistrees</h5>
                                    
                                    <Button onClick={handleShow} variant="primary">
                                        Enregistrer une entree
                                    </Button>

                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Enregistrer une entree</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Selectionner un produit</Form.Label>
                                                    <Form.Select>
                                                        <option></option>
                                                        <option>Produit 1</option>
                                                        <option>Produit 2</option>
                                                        <option>Produit 3</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Entrer son prix</Form.Label>
                                                    <Form.Control type="number" autoFocus />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Entrer sa quantite</Form.Label>
                                                    <Form.Control type="number" autoFocus />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Entrer une description si possible</Form.Label>
                                                    <Form.Control as="textarea" rows={3} autoFocus />
                                                </Form.Group>
                                            </Form>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Fermer
                                            </Button>
                                            <Button variant="primary" onClick={handleClose}>
                                                Enregistrer
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                    
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th scope="col">Nom produit</th>
                                                <th scope="col">Prix</th>
                                                <th scope="col">Quantite</th>
                                                <th scope="col">Description</th>
                                                <th scope="col">Date d'envoi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <Entree />
                                            <Entree />
                                            <Entree />
                                        </tbody>
                                    </table>
                                    <h5>Nombre de produits : <b>50</b></h5>
                                    <h5>Montant attendu : <b>200000 XAF</b></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ListeEntrees;