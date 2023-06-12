import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Notfound from "./pages/Notfound";
import Home from "./pages/Home";
import ListeVentes from "./pages/ListeVentes";
import ListeEntrees from "./pages/ListeEntrees";
import Produit from "./pages/Produits";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/ventes" element={<ListeVentes />} />
                <Route path="/entrees" element={<ListeEntrees />} />
                <Route path="/produits" element={<Produit />} />
                <Route path="/*" element={<Notfound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;