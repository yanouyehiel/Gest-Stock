import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Notfound from "./pages/Notfound";
import Home from "./pages/Home";
import ListeVentes from "./pages/ListeVentes";
import ListeEntrees from "./pages/ListeEntrees";
import Produit from "./pages/Produits";
import { useState } from 'react';
import Auth from "./context/Auth";
import { hasAuthenticated } from "./context/Auth";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated);

    return (
        <Auth.Provider value={{isAuthenticated, setIsAuthenticated}}>
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
        </Auth.Provider>
    )
}

export default App;