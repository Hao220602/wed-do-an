import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './styles/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p className="footer-text">
              Copyright &copy; eMart | Built by{' '}
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                Shop
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
