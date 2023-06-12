import Alert from 'react-bootstrap/Alert';

function AlertComponent(variant, message) {


    return (
        <>
            <Alert key={variant} variant={variant}>{message}</Alert>
        </>
    )
}

export default AlertComponent;