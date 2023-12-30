import { useState } from 'react'

import styles from './Listing.module.css'
import logo from '../../assets/Login-musicartlogo.png'
import girlWithHeadPhones from '../../assets/discountbanner.png'
import axios from 'axios';

import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { Link, useNavigate } from "react-router-dom"

// Bootstrap imports
import { Breadcrumb, Button, Container } from 'react-bootstrap';

// Importing breadcrumb Links 
const homeLink = `${process.env.REACT_APP_BASE_URL}/`;


export const Listing = () => {
    const [items, setItems] = useState([]);

    return (
        <>
            {/* <h1> Listing Page</h1> */}

            <Header />

            <Container fluid className={styles.biggest}>
                {/* Homebar & breadcrumb */}
                <div className={styles.toppart}>
                    <h1 className={styles.header}>
                        <img src={logo} alt="Logo" /> {' '}
                        Musicart
                    </h1>
                    <Breadcrumb className='breadcrumb'>
                        <Breadcrumb.Item active >Home</Breadcrumb.Item>
                        {/* <Breadcrumb.Item active>Data</Breadcrumb.Item> */}
                    </Breadcrumb>
                </div>

                {/* Discount Banner */}
                <Container fluid className={styles.discount} >
                    <div className={styles.lhs}>
                        <h1>Grab upto 50% off on <br /> Selected headphones</h1>
                        <Button href="#" className={styles.btn}>Buy Now</Button>
                    </div>

                    <div className={styles.rhs}>
                        <img src={girlWithHeadPhones} alt="Banner Img" />
                    </div>
                </Container>

                {/* Search Bar */}

                {/* buttons for view, filter, sort */}

                {/* Listing */}

            </Container>

            <Footer />
        </>
    );
}

