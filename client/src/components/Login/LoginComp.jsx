import { useState } from 'react'

import styles from './LoginComp.module.css'
import logo from '../../assets/Login-musicartlogo.png'
import axios from 'axios';

import { Footer } from '../Footer/Footer'
import { Link, useNavigate } from "react-router-dom"
import { Form, Button } from 'react-bootstrap';



export const LoginComp = () => {

    const navigate = useNavigate();     // Note that in react-router-dom latest version (at this time v6) .useHistory() is replaced with .useNavigate()

    const [user, setUser] = useState({
        uemail: '',
        upwd: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("HandleSubmit called !");
        axios
            .post(`http://localhost:4000/FET/login`, user)          // notice that we are using a post call here and sending the data in the 2nd param
            .then((res) => {
                console.log("User sent Successfully !\n", res.data)
                const jwtToken = res.data.token;
                console.log('Token : ', jwtToken)
                // clearing the form : 
                setUser({
                    uemail: '',
                    upwd: ''
                })

                navigate('/');
            }
            )
            .catch((err) => console.log("[ERROR] : ", err))
    }


    return (
        <>
            <h1>
                <img src={logo} alt="Logo" /> {' '}
                Musicart
            </h1>

            <div className={styles.container}>
                <h1>Sign In</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><b>Enter your email</b></Form.Label>
                        <Form.Control type="email" value={user.uemail} onInput={(e) => {
                            setUser({ ...user, uemail: e.target.value })
                        }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><b>Password</b></Form.Label>
                        <Form.Control type="password" value={user.upwd} onInput={(e) => {
                            setUser({ ...user, upwd: e.target.value })
                        }} />
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