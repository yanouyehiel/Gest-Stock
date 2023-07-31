import AlertComponent from "../components/AlertComponent"
import Header from "../components/Header"
import Produit from "../components/Produit"
import Sidebar from "../components/Sidebar"
import { Button, Modal, Form } from "react-bootstrap"
import { useState, useEffect } from 'react'
import axios from "axios"


function Produits() {
    const [data, setData] = useState([])
    const [produit, setProduit] = useState({
        nom: '',
        date: 0
    })
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

    const handleChange = ({ currentTarget }) => {
        const {name, value} = currentTarget;
        setProduit({...produit, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios
            .post("http://localhost:3001/produits", {
                nom: produit.nom,
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
                                                    <Form.Control type="text" name='nom' onChange={handleChange} />
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
                                                <th scope="col">Date d'enregistrement</th>
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