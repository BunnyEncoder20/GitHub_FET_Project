import React from 'react';
import styles from './ListView.module.css'

// Importing Bootstrap 
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const ListView = ({ items }) => {

    return (
        <>
            {/* <h1>List View Component</h1> */}

            {items.map((item, index) => (
                <Card key={index} style={{ maxWidth: '100%', border: 'none' }}>
                    <Card.Body className={styles.cardBody}>
                        <div className={styles.lhs}>
                            <img src={item.mainImage} className={styles.cardImgs}/>
                        </div>
                        <div className={styles.rhs}>
                            <Card.Title className={styles.cardTitle}>{item.ititle}</Card.Title>
                            <Card.Text className={styles.cardTexts} >Price - ₹{item.iprice}</Card.Text>
                            <Card.Text className={styles.cardTexts} >{item.icolor} | {item.itype}</Card.Text>
                            <Card.Text className={styles.cardTexts} >{item.ilongtitle}</Card.Text>
                            <Button variant="primary" size='lg' bsPrefix={styles.detailsBtn}>Details</Button>
                        </div>
                    </Card.Body>
                </Card>
            ))}

        </>
    )
}