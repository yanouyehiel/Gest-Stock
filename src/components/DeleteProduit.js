import { Button } from 'react-bootstrap';
import axios from 'axios';

function DeleteProduit({ id }) {
    const handleDelete = () => {
        console.log('reussi')
        axios.delete("https://www.oncheckcm.com/api-gest-stock/products.php" + id);
        window.location.reload();
    };

    return (
        <Button 
            className="btn btn-danger w-100" 
            variant="danger"
            onClick={() => {
                if (window.confirm('Voulez-vous vraiment supprimer ce produit ?')) {
                    handleDelete();
                }
            }}
        >
            Delete
        </Button>
    )
}

export default DeleteProduit;