import { Button } from "react-bootstrap";

function Produit() {

    return (
        <>
            <tr>
                <td>1</td>
                <td>Lorem Ipsum</td>
                <td>2500 FCFA</td>
                <td>Lorem wehfewuihnreuhreerfhdjfSu vuifbeoifbriufbo</td>
                <td>10</td>
                <td class="align-btn">
                    <Button className="btn btn-info w-100" variant="info">
                        Update
                    </Button>
                    <Button className="btn btn-danger w-100" variant="danger">
                        Delete
                    </Button>
                </td>
            </tr>
        </>
    )
}

export default Produit;