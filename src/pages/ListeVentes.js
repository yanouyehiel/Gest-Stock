import Vente from "../components/Vente";
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function ListeVentes() {


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
                            <li class="breadcrumb-item active">Gestion des ventes</li>
                        </ol>
                    </nav>
                </div>

                <section class="section dashboard">
                    <div class="row">

                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Visualiser toutes les ventes enregistrées</h5>
                                    
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th scope="col">Produit</th>
                                                <th scope="col">Prix Unitaire</th>
                                                <th scope="col">Quantite</th>
                                                <th scope="col">Prix Total</th>
                                                <th scope="col">Vendeur</th>
                                                <th scope="col">Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <Vente />
                                            <Vente />
                                            <Vente />
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

export default ListeVentes;