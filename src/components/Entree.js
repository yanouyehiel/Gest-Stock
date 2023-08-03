import React from 'react';

function Entree({entree}) {
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
                <td>{entree.id}</td>
                <td>{entree.nom}</td>
                <td>{entree.prix} FCFA</td>
                <td>{entree.quantite}</td>
                <td>{entree.description}</td>
                <td>{dateParser(parseInt(entree.date))}</td>
            </tr>
        </>
    )
}

export default Entree;