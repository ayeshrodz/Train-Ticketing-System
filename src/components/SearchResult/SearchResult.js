import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import "./SearchResult.css";
import Form from "react-bootstrap/Form";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import firebaseDb from "../../firebase";
import { Button} from "react-bootstrap";
import ButtonIncrement from "./ButtonIncrement"

import Modal from "react-bootstrap/Modal";

function SearchResult() {
  const [BKshow, setBKShow] = useState(false);

  const BKhandleClose = () => {
    setBKShow(false);
  };
  const BKhandleShow = () => {
    setBKShow(true);
  };

  return (
    <div>
      <Form className="SearchResult-Form">
        <div className="input-search-result">
          <input placeholder="From" />     
        </div>
        <div className="input-search-result">
          <input placeholder="To" />  
        </div>
        <div className="DatePicker-Result">
          <TextField
            id="date"
            label="Date"
            type="date"
            className="DatePicker-Result"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

        <div className="next-btn-result">
          <ArrowForwardIcon className="arrow-right-home" />
        </div>
      </Form>
      <div className="row card-wrapper">
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Colombo - Kandy</h5>
              <p className="card-text">Start Station :</p>
              <p className="card-text">End Station :</p>
              <p className="card-text">Departure Time : </p>
              <p className="card-text">Destination : </p>
              <p className="card-text">Arrival at Destination : </p>
              <p className="card-text">Arrival at End Station :</p>
              <p className="card-text">Run By : </p>
              <p className="card-text">Train Name : </p>
              <p className="card-text">Train Number : </p>
              <p className="card-text">Train Type : </p>

              <div className="personaltxt">
        <Button
          id="PersonalDetails"
          size="lg"
          variant="btn btn-success"
          onClick={BKhandleShow}
          className = "book-now"
        >
          Book Now
        </Button>

        <Modal
          show={BKshow}
          onHide={BKhandleClose}
          centered
          target="PersonalDetails"
        >
          <Modal.Header closeButton>
            <Modal.Title>Book Now</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="PersonalDetailsModal">
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control type="UserName" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="Email" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="Email" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <ButtonIncrement/>
                </Form.Group>
              </Form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={BKhandleClose}>
              Close
            </Button>
            <Button variant="btn btn-success" onClick={BKhandleClose}>
              Book Now
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
