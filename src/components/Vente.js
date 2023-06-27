
function Vente({vente}) {

    const dateParser = (date) => {
        let newDate = new Date(date).toLocaleDateString('fr-FR', {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        });
        return newDate;
    };

    return (
        <>
            <tr>
                <td>{vente.id}</td>
                <td>{vente.nom}</td>
                <td>{vente.prix_unitaire}</td>
                <td>{vente.quantite}</td>
                <td>{vente.prix_unitaire * vente.quantite} FCFA</td>
                <td>{vente.vendeur}</td>
                <td>{dateParser(vente.date)}</td>
            </tr>
        </>
    )
}

export default Vente;