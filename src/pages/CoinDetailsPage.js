
import React, { useEffect } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import '../App.css';
import { getCoinById, selectActiveCoin } from '../features/coins/coinSlice';
export default function ActiveCoinPage(){
    let { id } = useParams()
    const coin = useSelector(selectActiveCoin)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCoinById(id))
      }, [dispatch, id]);
    
    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col className="text-light" sm={5}>
                    <Card className="back-dark p-4">
                        <Row className="back-dark justify-content-center">
                        <img width="75px" className="back-dark" src={coin.image.large} alt=""/>
                        <h1 className="mt-3 ml-4 back-dark">{coin.name}</h1>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <Card>
                        
                    </Card>
                </Col>
                <Col>
                    <Card>

                    </Card>
                </Col>
                <Col>
                    <Card>
                        
                    </Card>
                </Col>
                <Col>
                    <Card>
                        
                    </Card>
                </Col>
                <Col>
                    <Card>
                        
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}