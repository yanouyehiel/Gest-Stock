import Vente from "../components/Vente";
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Button, Modal, Form } from "react-bootstrap";
import { useState, useEffect } from 'react';
import axios from 'axios';
import AlertComponent from "../components/AlertComponent";

function ListeVentes() {
    const [show, setShow] = useState(false);
    const [nom, setNom] = useState('');
    const [prix, setPrix] = useState(0);
    const [qte, setQte] = useState(0);
    //const [vendeur, setVendeur] = useState('');
    const [produits, setProduits] = useState([]);
    const [ventes, setVentes] = useState([]);
    const [alert, setAlert] = useState(false);

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
        getProduits();
    }

    useEffect(() => {
        getDatas();
    }, []);

    const getProduits = () => {
        axios
            .get('http://localhost:3001/produits')
            .then((res) => setProduits(res.data))
        ;
    };

    const getDatas = () => {
        axios
            .get('http://localhost:3001/ventes')
            .then((res) => setVentes(res.data))
        ;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       
        axios
            .post("http://localhost:3001/ventes", {
                nom: nom,
                prix_unitaire: parseInt(prix),
                quantite: parseInt(qte),
                vendeur: 'Test User',
                date: Date.now()
            })
            .then(() => {  
                setAlert(true);
                handleClose();
                getDatas();
            }
        );
    }

    const calcMontantTotal = () => {
        let total = 0;

        for (const vente of ventes) {
            total = total + (vente.prix_unitaire * vente.quantite);
        }

        return total;
    }

    return (
        <>
            <Header />
            <Sidebar />

            <main id="main" class="main">
                <div class="pagetitle">
                    <h1>Interface d'administration du stock</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/home">Accueil</a></li>
                            <li class="breadcrumb-item active">Gestion des ventes</li>
                        </ol>
                    </nav>
                </div>

                {alert && <AlertComponent variant='success' message='Nouvelle vente enregistreée !' />}

                <section class="section dashboard">
                    <div class="row">

                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Visualiser toutes les ventes enregistrées</h5>
                                    
                                    <Button onClick={handleShow} variant="primary">
                                        Enregistrer une entrée
                                    </Button>

                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Enregistrer une entrée</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form onSubmit={handleSubmit}>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Selectionner un produit</Form.Label>
                                                    <Form.Select onChange={e => setNom(e.target.value)} name={nom}>
                                                        <option value='' selected></option>
                                                        {produits
                                                            .map((produit) => (
                                                                <option value={produit.nom}>{produit.nom}</option>
                                                            ))
                                                        }
                                                    </Form.Select>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Entrer son prix</Form.Label>
                                                    <Form.Control type="number" onChange={(e) => setPrix(e.target.value)} autoFocus />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Entrer sa quantite</Form.Label>
                                                    <Form.Control type="number" onChange={(e) => setQte(e.target.value)} autoFocus />
                                                </Form.Group>
                                                <Button variant="primary" type="submit">
                                                    Enregistrer
                                                </Button>
                                            </Form>
                                        </Modal.Body>
                                    </Modal>

                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th scope="col">Nom Produit</th>
                                                <th scope="col">Prix Unitaire</th>
                                                <th scope="col">Quantite</th>
                                                <th scope="col">Prix Total</th>
                                                <th scope="col">Vendeur</th>
                                                <th scope="col">Date de vente</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {ventes
                                                .sort((a, b) => b.date - a.date)
                                                .map((vente) => (
                                                    <Vente key={vente.id} vente={vente} />
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Récapitulatif</h5>
                                <h5>Total produits vendus: <b>{ventes.length}</b></h5><hr/>
                                <h5>Total actuel: <b>{calcMontantTotal()} FCFA</b></h5><hr/>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ListeVentes;