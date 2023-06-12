import AlertComponent from "../components/AlertComponent"
import Header from "../components/Header"
import Produit from "../components/Produit"
import Sidebar from "../components/Sidebar"
//import { Button } from "react-bootstrap"


function Produits() {

    return (
        <>
            <Header />
            <Sidebar />

            <main id="main" class="main">
                <div class="pagetitle">
                    <h1>Interface d'administration OnCheck</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/home">Accueil</a></li>
                            <li class="breadcrumb-item active">Gestion des produits</li>
                        </ol>
                    </nav>
                </div>
                <AlertComponent variant='success' message='Voici une alerte !' />
                <section class="section dashboard">
                    <div class="row">

                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Liste des produits enregistres pour les ventes</h5>
                                    
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th scope="col">Nom produit</th>
                                                <th scope="col">Prix</th>
                                                <th scope="col">Description</th>
                                                <th scope="col">Stock</th>
                                                <th scope="col">Options</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <Produit />
                                            <Produit />
                                            <Produit />
                                            <Produit />
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