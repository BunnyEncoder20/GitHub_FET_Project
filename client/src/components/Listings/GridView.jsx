import { React } from 'react';
import styles from './GridView.module.css'




// Importing bootstrap 
import { Card, Col, Row } from 'react-bootstrap'

export const GridView = ({ items }) => {

    

    return (
        <>
            <Row xs={1} md={4} className={`g-4 ${styles.rows}`}>
                {items.map((item, idx) => (
                    <Col key={idx} md={3} className='mb-4 d-flex align-items-center justify-content-center'>
                        <Card className={`d-flex align-items-center justify-content-center ${styles.cards} w-100 border-0`}>
                            <Card.Img variant="top" src={`data:image/png;base64,${item.mainImage}`} alt={`Image ${idx}`} className={`${styles.cardImgs}`}/>
                            <Card.Body className='text-start'>
                                <Card.Title className={styles.titles} >{item.ititle}</Card.Title>
                                <Card.Text className={styles.cardtexts} >Price - ₹{item.iprice}</Card.Text>
                                <Card.Text className={styles.cardtexts} >{item.icolor} | {item.itype}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </>
    )
}
