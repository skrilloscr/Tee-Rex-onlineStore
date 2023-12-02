import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addToCart } from '../Redux/cartSlice';
import { addToWishlist } from '../Redux/wishlistSlice';

function Home() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <>
      <Row className='mt-5 mb-5'>
        {data.length > 0 ? (
          data.map((product, index) => (
            <Col key={index} className='mb-4' xs={12} sm={6} md={4} lg={3}>
              <Card style={{ height: '100%' }} className='shadow rounded'>
                <Card.Img height={'200px'} variant='top' src={product?.image} />
                <Card.Body>
                  <Card.Title>{product?.title}</Card.Title>
                  <Card.Text>
                    <p>{product?.description.slice(0, 55)}...</p>
                    <h5>${product?.price}</h5>
                  </Card.Text>
                  <div className='d-flex justify-content-between'>
                    <Button className='btn btn-light' onClick={() => dispatch(addToWishlist(product))}>
                      <i className='fa-solid fa-heart text-danger'></i>
                    </Button>
                    <Button className='btn btn-light' onClick={() => dispatch(addToCart(product))}>
                      <i className='fa-solid fa-cart-plus text-success'></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className='text-danger fw-bolder fs-4'>Nothing to Display</p>
        )}
      </Row>
    </>
  );
}

export default Home;
