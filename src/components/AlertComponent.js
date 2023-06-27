import Alert from 'react-bootstrap/Alert';

function AlertComponent(props) {


    return (
        <>
            <Alert key={props.variant} variant={props.variant} dismissible>{props.message}</Alert>
        </>
    )
}

export default AlertComponent;