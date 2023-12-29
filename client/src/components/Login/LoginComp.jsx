import styles from './LoginComp.module.css'
import logo from '../../assets/Login-musicartlogo.png'
import axios from 'axios';

import { Footer } from '../Footer/Footer'
import { Link } from "react-router-dom"



import { Form, Button } from 'react-bootstrap';

export const LoginComp = () => {
    return (
        <>
            <h1>
                <img src={logo} alt="Logo" /> {' '}
                Musicart
            </h1>

            <div className={styles.container}>
                <h1>Sign In</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><b>Enter your email</b></Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><b>Password</b></Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Continue
                    </Button>
                    <Form.Group>
                        <Form.Text className="text-muted">
                            By continuing, you agree to Musicart privacy notice and conditions of use.
                        </Form.Text>
                    </Form.Group>

                </Form>
            </div>

            <div className={styles.signup}>
                New to Musicart ?
            </div>

            <div className={styles.signup_btn}>
                <Link to='/register'>
                    <Button variant="outline-dark">Create your Musicart account</Button>
                </Link>
            </div>

            <Footer />

        </>
    );
}