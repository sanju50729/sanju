import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  // Scroll State
  const [isVisible, setIsVisible] = useState(false);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  });
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Location</h5>
                <p>🍔 Tasty Burgurs 🍔</p>
                <p>Near Softech Infoways,Surkhab Chowk, Sirsa</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Working Hours</h5>
                <p>Mon-Fri: 9:00AM - 10:00PM</p>
                <p>Saturday: 10:00AM - 8:30PM</p>
                <p>Sunday: 12:00PM - 5:00PM</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Order Now</h5>
                <p>Contact and Order now and Enjoy</p>
                <p>
                  <Link to="tel:82220-98246" className="calling">
                    82220-98246
                  </Link>
                </p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Follow Us</h5>
                <p>Stay connected for updates and more details</p>
                <ul className="list-unstyled text-center mt-2">
                  <li>
                    <a href="https://github.com/nimel123">
                    <i class="bi bi-github"></i>
                    </a>
                  </li>
                  <li>
                  <a href='https://www.linkedin.com/in/ramesh-nimel-a20122218/'>
                  <i class="bi bi-linkedin"></i>
                    </a>
                  </li>
                  <li>
                  <a href='https://www.instagram.com/rameshnimel/'>
                      <i class="bi bi-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@union_gaming999">
                      <i class="bi bi-youtube"></i>
                      </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Sroll To Top */}
      {isVisible && (
        <div className="scroll_top" onClick={scrollTop}>
          <i class="bi bi-arrow-up"></i>
        </div>
      )}
    </>
  );
}

export default Footer;