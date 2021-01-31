import React, { useRef, useState } from "react";
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import "./Cart.css";

import Payment from "./Payment";
import Orders from "./Orders";

export default function Cart() {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-8">
          <Orders></Orders>
        </div>
        <div class="col-lg-4">
          <Payment></Payment>
        </div>
      </div>
    </div>
  );
}
