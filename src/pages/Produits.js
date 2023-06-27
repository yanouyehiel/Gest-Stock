import AlertComponent from "../components/AlertComponent"
import Header from "../components/Header"
import Produit from "../components/Produit"
import Sidebar from "../components/Sidebar"
import { Button, Modal, Form } from "react-bootstrap"
import { useState, useEffect } from 'react'
import axios from "axios"


function Produits() {
    const [data, setData] = useState([])
    const [nom, setNom] = useState('')
    const [stock, setStock] = useState(0)
    const [description, setDescription] = useState('')
    const [show, setShow] = useState(false);
    const [alert, setAlert] = useState(false)

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios
            .get('http://localhost:3001/produits')
            .then((res) => setData(res.data))
        ;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios
            .post("http://localhost:3001/produits", {
                nom: nom,
                stock: stock,
                description: description,
                date: Date.now()
            })
            .then(() => {  
                setAlert(true);
                handleClose();
                getData();
            }
        );
    }

    return (
        <>
            <Header />
            <Sidebar />

            <main id="main" class="main">
                <div class="pagetitle">
                    <h1>Interface d'administration de GestStock</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/home">Accueil</a></li>
                            <li class="breadcrumb-item active">Gestion des produits</li>
                        </ol>
                    </nav>
                </div>

                {alert && <AlertComponent variant='success' message='Nouveau produit ajouté !' />}
                
                <section class="section dashboard">
                    <div class="row">

                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="en-tete">
                                        <h5 class="card-title">Liste des produits enregistrés pour les ventes</h5>
                                        
                                        <Button onClick={handleShow} variant="primary">
                                            Enregistrer une produit
                                        </Button>
                                    </div>

                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Enregistrer un produit</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form onSubmit={handleSubmit}>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Entrer son nom</Form.Label>
                                                    <Form.Control type="text" onChange={(e) => setNom(e.target.value)} value={nom} />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Entrer sa quantite</Form.Label>
                                                    <Form.Control type="number" onChange={(e) => setStock(e.target.value)} value={stock} autoFocus />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Entrer une description si possible</Form.Label>
                                                    <Form.Control as="textarea" rows={3} onChange={(e) => setDescription(e.target.value)} value={description} autoFocus />
                                                </Form.Group>
                                                <Button type='submit' variant="primary">
                                                    Enregistrer
                                                </Button>
                                            </Form>
                                        </Modal.Body>
                                    </Modal>

                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th scope="col">Nom produit</th>
                                                <th scope="col">Description</th>
                                                <th scope="col">Stock</th>
                                                <th scope="col">Options</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {data
                                            .sort((a, b) => b.date - a.date)
                                            .map((produit) => (
                                            <Produit key={produit.id} produit={produit} />
                                        ))}
                                        </tbody>
                                    </table>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Produits