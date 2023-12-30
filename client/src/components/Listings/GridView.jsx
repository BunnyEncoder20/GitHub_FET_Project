import { React, useState, useEffect } from 'react';
import './GridView.css'


// Importing bootstrap 
import { Card, Col, Row } from 'react-bootstrap'

export const GridView = () => {

    const [items, setItems] = useState([]);

    // useEffect(() => {
    //     axios
    //         .get('http://localhost:4000/users')
    //         .then((res) => setItems(res.data.data))
    //         .catch((err) => console.log("[ERROR] : ", err))
    // })

    return (
        <>
            <Row xs={1} md={4} className="g-4">
                {Array.from({ length: 13 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </>
    )
}
