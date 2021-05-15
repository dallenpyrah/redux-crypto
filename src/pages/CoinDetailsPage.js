
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
                <Col className="text-light" sm={8}>
                    <Card className="back-dark">
                        <h1 className="mt-5 back-dark">{coin.name}</h1>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}