import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Card, Button } from "react-bootstrap";
import { useNavigate, redirect } from "react-router-dom";
import { useEffect } from "react";

function Home() {
    const navigate = useNavigate();
    const savedUser = JSON.parse(window.localStorage.getItem('gest-stock'))
    const user = savedUser ? savedUser : null
    
    useEffect(() => {
        
        if (user == null) {
            navigate('/')
        }

    }, [])
    

    return (
        <body>
            <Header />

            <Sidebar />

            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Interface de gestion des produits</h1>
                    <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active">Tableau de board</li>
                    </ol>
                    </nav>
                </div>

                <section className="section dashboard">
                    <div className="row">
                        
                        <div className="col-lg-12">
                            <div className="card">
                                <Card className="text-center">
                                    <Card.Body>
                                        <Card.Title>Gerer les entrées</Card.Title>
                                        <Card.Text>
                                            Lorsque les produits sont envoyés depuis l'étranger, les expéditeurs doivent les entrés tous ici.
                                            Enregistrer chaque produit avec sa quantité. Les ventes seront effectuées plus tard à la base des entrées que 
                                            vous(expéditeurs) aurez spécifiées.
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => navigate('/entrees')}>Allez go !</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="card">
                                <Card className="text-center">
                                    <Card.Body>
                                        <Card.Title>Gérer les ventes</Card.Title>
                                        <Card.Text>
                                            Ici, vous pourrez enregistrer, visualiser et supprimer une vente
                                        </Card.Text>
                                        <Button variant="info" onClick={() => navigate('/ventes')}>Allez go !</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </body>
    )
}

export default Home;