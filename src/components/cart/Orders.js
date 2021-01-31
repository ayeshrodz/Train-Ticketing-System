import React, { useState, useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import "./Orders.css";
import { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";

function Payment() {
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const { currentUser } = useAuth();

  const cartItemRef = db.collection("items");

  async function getOrders() {
    setLoading(true);
    await cartItemRef
      .where("user", "==", currentUser.uid)
      .where("paid", "==", false)
      .get()
      .then((item) => {
        const items = item.docs.map((doc) => doc.data());
        setCartItems(items);
      });
    setLoading(false);
  }

  useEffect(() => {
    getOrders();
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <h2>Loading the orders...</h2>
      </div>
    );
  }

  return (
    <Container className="d-flex align-items-center justify-content-center orders-main">
      <div className="w-100 orders-content">
        <Card className="shadow pl-3 pr-3 mb-5 ml-0 mt-0 bg-white rounded card">
          <Card.Body>
            <h2 className="text-center mb-4 ">Order Details</h2>
            {cartItems.map((item) => (
              <Card className="cart-item mb-3" key={item.id}>
                <Card.Body>
                  <p>
                    <b>{item.name}</b>
                  </p>
                  <p>Number of Tickets: {item.count}</p>
                  <p>Amount: {item.amount}</p>
                </Card.Body>
              </Card>
            ))}
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default Payment;
