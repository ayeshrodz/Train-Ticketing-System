import React from "react";
import Form from "react-bootstrap/Form";
import "./Home.css";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h2 className="topic-2">Plan Your Journey With Us</h2>
      <Form className="Search-Form">
        <div className="input-search">
          <input placeholder="From" />
        </div>
        <div className="input-search">
          <input placeholder="To" />
        </div>
        <div className="DatePicker-Search">
          <TextField
            id="date"
            label="Date"
            type="date"
            className="DatePicker-Search"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <Link to="/searchresult">
          <button type="button" class="btn-1 btn-primary">
            Search
          </button>
        </Link>
      </Form>
    </div>
  );
}

export default Home;
