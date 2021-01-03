import React from "react";
import Header from "../header/Header";
import Form from "react-bootstrap/Form";
import { Col, Row } from "reactstrap";
import "./Home.css";
import TextField from "@material-ui/core/TextField";
import Button from "react-bootstrap/Button";
import background from "../Images/background.jpg"

function Home() {
  return (
    <div className="home">
      {/* Navigation Bar Component */}
      <Header />
      {/* Navigation Bar Component Ends */}

      <h2 className="topic-2">Plan Your Journey With Us</h2>
      <Form className="Search-Form">

        <div className="input-search">
          <input placeholder="From" />
        </div>
        <div className="input-search">
          <input placeholder="To" />
        </div>
        <div className="DatePicker">
          <TextField
            id="date"
            label="Date"
            type="date"
            className="DatePicker"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <button type="button" class="btn-1 btn-primary">
          Search
        </button>
      </Form>
      <div>
      <img src = {background} className = "background" alt = ""/>
      </div>
    </div>
  );
}

export default Home;
