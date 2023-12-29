import { useState, useEffect } from 'react' 
import styles from './Signup.module.css'
import logo from '../../assets/Login-musicartlogo.png'
import { Footer } from '../Footer/Footer'
import { Link } from "react-router-dom"


import { Form, Button } from 'react-bootstrap';

export const Signup = () => {

    const [newUser, setNewUser] = useState({
        uname: '',
        umobile: '',
        uemail: '',
        upwd: ''
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        
        console.log("HandleSubmit called !");
        console.log(newUser);
        // axios
        //     .post('http://localhost:4000/users' , newUser)          // notice that we are using a post call here and sending the data in the 2nd param
        //     .then(() => {
        //             console.log("User added Successfully !")

        //             // clearing the form : 
        //             setNewUser({
        //                 first_name: '',
        //                 last_name: '',
        //                 email: '',
        //                 avatar: ''
        //             })
        //         }
        //     )
        //     .catch((err) => console.log("[ERROR] : ", err))
            
    }


    return (
        <>
            <h1>
                <img src={logo} alt="Logo" /> {' '}
                Musicart
            </h1>

            <div className={styles.container}>
                <h1>Create Account</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><b>Name</b></Form.Label>
                        <Form.Control type="text" value={newUser.uname}  onInput={ (e) => {
                            setNewUser({ ...newUser, uname: e.target.value })
                        }}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><b>Mobile Number</b></Form.Label>
                        <Form.Control type='tel' value={newUser.umobile} onInput={ (e) => {
                            setNewUser({ ...newUser, umobile: e.target.value })
                        }}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><b>Email Id</b></Form.Label>
                        <Form.Control type="email"  value={newUser.uemail} onInput={ (e) => {
                            setNewUser({ ...newUser, uemail: e.target.value })
                        }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><b>Password</b></Form.Label>
                        <Form.Control type="password" value={newUser.upwd} onInput={ (e) => {
                            setNewUser({ ...newUser, upwd: e.target.value })
                        }}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Text className="text-muted">
                            <b>By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Musicart. Message and data rates may apply.</b>
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit" >
                        Continue
                    </Button>

                    <Form.Group>
                        <Form.Text className="text-muted">
                            By continuing, you agree to Musicart privacy notice and conditions of use.
                        </Form.Text>
                    </Form.Group>

                </Form>
            </div>

            <div className={styles.already}>
                <b>Already have an account? </b>
                <Link to='/login'>Sign Up</Link>
            </div>

            <Footer />

        </>
    );
}