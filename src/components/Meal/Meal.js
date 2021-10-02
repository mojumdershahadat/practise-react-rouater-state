import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import './Meal.css'

const Meal = (props) => {
    console.log(props);
    const { strCategory, strMealThumb, strInstructions } = props.food
    return (
        <div>
            <Row>
                <Col xs={6} md={4}  >
                    <CardGroup>
                        <Card >
                            <Card.Img className="img-fluid" variant="top"  src={strMealThumb} />
                            <Card.Body>
                                <Card.Title>{strCategory}</Card.Title>
                                <Card.Text>
                                    {strInstructions.slice(0, 100)}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
        </div>
    );
};

export default Meal;