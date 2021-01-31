import React, { useState, useEffect } from "react";
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import "./Payment.css";
import { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";

function Payment() {
  const [loading, setLoading] = useState(false);
  const [totalPayment, setTotalPayment] = useState([]);
  const { currentUser } = useAuth();

  const orderItemRef = db.collection("orders");

  async function getTotalPayment() {
    setLoading(true);
    await orderItemRef
      .where("user", "==", currentUser.uid)
      .where("paid", "==", false)
      .get()
      .then((item) => {
        const items = item.docs.map((doc) => doc.data());
        setTotalPayment(items);
      });
    setLoading(false);
  }

  function handlePayment(e) {
    e.preventDefault();
  }

  useEffect(() => {
    getTotalPayment();
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <h2>Loading the orders...</h2>
      </div>
    );
  }

  return (
    <Container className="d-flex align-items-center justify-content-center payment-card-main">
      <div className="w-100 payment-card-content">
        <Card className="shadow p-3 mb-5 ml-0 mt-0 bg-white rounded card">
          <Card.Body>
            <h2 className="text-center mb-4">Payment Details</h2>
            <Form onSubmit={handlePayment}>
              <Row>
                <Col>
                  {totalPayment.map((order) => (
                    <div key={order.id} className="payment-amount">
                      <p>Total Amount : Rs. {order.total.toFixed(2)}</p>
                    </div>
                  ))}
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group id="cardNumber">
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control
                      type="text"
                      pattern="^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$"
                      required
                      placeholder="Card Number"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group id="expiry">
                    <Form.Label>Expiry Date</Form.Label>
                    <Form.Control
                      type="text"
                      pattern="^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$"
                      required
                      placeholder="MM/YY"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group id="cvv">
                    <Form.Label>CVV</Form.Label>
                    <Form.Control
                      type="text"
                      pattern="[\d]{3}"
                      required
                      placeholder="CVC"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group id="cardName">
                    <Form.Label>Card Name</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      placeholder="Name of the Card"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button
                className="w-100"
                style={{
                  background: "#f25e42",
                  border: "none",
                  marginTop: "2vh",
                }}
                type="submit"
              >
                Pay Now
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default Payment;
