import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Coin from '../Coin';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCoins, selectAllCoins } from '../features/coins/coinSlice';
export default function Homepage(){
    const coins = useSelector(selectAllCoins)
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    useEffect(() => { 
      dispatch(getAllCoins())
    }, [dispatch])
  
    const handleChange = e => {
      setSearch(e.target.value)
    }
  
    const filteredCoins = coins.filter(coin => 
      coin.name.toLowerCase().includes(search.toLowerCase()));
  
    return (
      <Container fluid className="background-black">
        <Row className="justify-content-center">
          <Col className="text-center text-light mt-5"><h3><b>Search a Currrency</b></h3></Col>
        </Row>
        <Row className="justify-content-center mt-3 mb-4">
          <Col className="text-center" xs={4}><Form><input className="form-control p-3 input text-light" onChange={handleChange} placeholder="Search" ></input></Form></Col>
        </Row>
        <Row className="justify-content-center">{filteredCoins.map(coin => {
          return (
            <Coin key={coin.id} name={coin.name} id={coin.id} symbol={coin.symbol} price={coin.current_price} volume={coin.total_volume} marketcap={coin.market_cap}
            image={coin.image} priceChange={coin.price_change_percentage_24h}/>
          )
        })}</Row>
      </Container>
    );
}