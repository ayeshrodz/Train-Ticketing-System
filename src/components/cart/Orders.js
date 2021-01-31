import React, { useState, useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
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
      .onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setCartItems(items);
        setLoading(false);
      });
  }

  function handleClick(order) {
    console.log(order.id);
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
        <Card className="shadow mb-2 ml-0 mt-0 bg-white rounded card">
          <Card.Body>
            <h2 className="text-center mb-4 ">Order Details</h2>
            {cartItems.map((train) => (
              <Card className="cart-item mb-3" key={train.id}>
                <Card.Body>
                  <div>
                    <div className="col-sm-10">
                      <p>
                        <b>{train.name}</b>
                        <br />
                        <i>
                          {train.from} to {train.to}
                        </i>
                      </p>
                      <p>Number of Tickets: {train.count}</p>
                      <p>Amount: {train.amount}</p>
                    </div>
                  </div>
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
