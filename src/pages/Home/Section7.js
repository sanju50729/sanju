import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


function Section7() {
  return (
    <section className="contact_section" id="contact">
      <Container>
        <Row className="justify-content-center">
          <Col sm={8} className="text-center">
            <h4>We Guarantee</h4>
            <h2>30 Minutes Delivery!</h2>
            <p>
            Craving a burger? Enjoy our delicious burgers delivered to your door in just 30 minutes or less!
             We’re committed to fast and fresh service. If we’re late, your meal is on us!
            </p>
            <Link to={`tel:${'8222098246'}`} className=" order_now btn_red" >
              Call: 82220-98246
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section7;