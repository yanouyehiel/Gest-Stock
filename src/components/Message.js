import { Button, Modal } from 'react-bootstrap';

function Message() {

    return (
        <div 
            className='modal show' 
            style={{ display: 'block', position: 'initial'}}>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Information</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>dffuhfguigfgd</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Fermer</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}

export default Message;