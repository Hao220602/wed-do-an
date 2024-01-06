import React, { useEffect, useState } from 'react';
import { Col, Row, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Product from '../components/Product';
import { listProducts } from '../store/actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';

const HomeScreen = ({ match }) => {
  const { keyword = '', pageNumber = 1 } = match.params;
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');

  const dispatch = useDispatch();
  const { products, loading, error, pages, page } = useSelector(
    (state) => state.productList
  );

  useEffect(() => {
    console.log('Fetching products with filters:', {
      keyword,
      pageNumber,
      category,
      brand,
    });
    
    dispatch(listProducts(keyword, pageNumber, category, brand));
  }, [dispatch, keyword, pageNumber, category, brand]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  };

  const brandOptions = ['', 'Cannon', 'Apple'];

  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}

      <Row className="my-3">
        <Col md={3}>
          <h2>Filter by Category</h2>
          <Form.Group controlId="category">
            <Form.Control
              as="select"
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="">All</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
            </Form.Control>
          </Form.Group>

          <h2>Filter by Brand</h2>
          <Form.Group controlId="brand">
            <Form.Control
              as="select"
              value={brand}
              onChange={handleBrandChange}
            >
              {brandOptions.map((option) => (
                <option key={option} value={option}>
                  {option || 'All'}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>

        <Col md={9}>
          <h1 className="my-3">Latest Products</h1>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <>
              <Row>
                {products.map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
              <Paginate pages={pages} page={page} keyword={keyword} />
            </>
          )}
        </Col>
      </Row>
    </>
  );
};

export default HomeScreen;
