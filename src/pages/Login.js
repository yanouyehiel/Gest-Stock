import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    return (
        <main>
            <div className="container">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                            <div className="d-flex justify-content-center py-4">
                                <a href="index.php" className="logo d-flex align-items-center w-auto">
                                <img src="./images/logo-oncheck.png" alt="Logo de GestStock" />
                                </a>
                            </div>

                            <div className="card mb-3">

                                <div className="card-body">

                                    <div className="pt-4 pb-2">
                                        <h5 className="card-title text-center pb-0 fs-4">Connexion</h5>
                                        <p className="text-center small">Entrer votre email et votre mot de passe</p>
                                    </div>
                                    <Form className="row g-3 needs-validation">

                                        <Form.Group className="col-12">
                                        <Form.Label for="yourUsername" className="form-label">Username</Form.Label>
                                        <div className="input-group has-validation">
                                            <Form.Control type="text" className="form-control" id="yourUsername" required />
                                        </div>
                                        </Form.Group>

                                        <Form.Group className="col-12">
                                        <Form.Label for="yourPasword" className="form-label">Mot de passe</Form.Label>
                                        <div className="input-group has-validation">
                                            <Form.Control type="password" className="form-control" id="yourPassword" required />
                                        </div>
                                        </Form.Group>

                                        <div className="col-12">
                                            <Button onClick={() => navigate('/home')} className="btn btn-primary w-100" variant="primary">
                                                <Spinner
                                                    as="span"
                                                    animation="grow"
                                                    size="sm"
                                                    role="status"
                                                    aria-hidden="true"
                                                />
                                                Connexion...
                                            </Button>
                                        </div>
                                        
                                    </Form>

                                </div>
                            </div>

                            <div className="credits">
                                Designé et conçu par <a href="/">Yehiel Yanou</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login;