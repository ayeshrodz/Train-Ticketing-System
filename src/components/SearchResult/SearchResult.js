import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import "./SearchResult.css";
import Form from "react-bootstrap/Form";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import firebaseDb from "../../firebase";
import { Button } from "react-bootstrap";
import ButtonIncrement from "./ButtonIncrement";
import firestore from "../../firebase";
import Modal from "react-bootstrap/Modal";
import { Dropdown } from "semantic-ui-react";

function SearchResult() {
  const [Trainschedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firestore.firestore().collection("TrainSchdule");

  function getSchedules() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setSchedules(items);
      setLoading(false);
    });
  }

  var curr = new Date();
  curr.setDate(curr.getDate() + 0);
  var date = curr.toISOString().substr(0, 10);
  const [BKshow, setBKShow] = useState(false);

  const BKhandleClose = () => {
    setBKShow(false);
  };
  const BKhandleShow = () => {
    setBKShow(true);
  };
  useEffect(() => {
    getSchedules();
  }, []);

  if (loading) {
    return <h2>Loading..</h2>;
  }

  return (
    <div>
      <Form className="SearchResult-Form">
        <div className="input-search-result">
          <Dropdown placeholder="From" fluid search selection options="" />)
        </div>
        <div className="input-search-result">
          <input placeholder="To" />
        </div>
        <div className="DatePicker-Result">
          <TextField
            type="date"
            id="date"
            label="Date"
            type="date"
            className="DatePicker-Result"
            defaultValue={date}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

        <div className="next-btn-result">
          <ArrowForwardIcon className="arrow-right-home" />
        </div>
      </Form>
      <div className="row">
        {Trainschedules.map((TrainSchdule) => (
          <div className="row card-wrapper">
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    {" "}
                    {TrainSchdule.StartStation} to {TrainSchdule.EndStation}
                  </h5>
                  <p className="card-text">
                    <b>Start Station :</b> {TrainSchdule.StartStation}
                  </p>
                  <p className="card-text">
                    <b>End Station :</b> {TrainSchdule.EndStation}
                  </p>
                  <p className="card-text">
                    <b>Departure Time : </b>
                    {TrainSchdule.DepartureTiime}{" "}
                  </p>
                  <p className="card-text">
                    <b>Destination :</b> {TrainSchdule.Destination}{" "}
                  </p>
                  <p className="card-text">
                    <b>Arrival at Destination :</b>{" "}
                    {TrainSchdule.ArrivalDestination}{" "}
                  </p>
                  <p className="card-text">
                    <b>Arrival at End Station :</b>{" "}
                    {TrainSchdule.ArrivalEndStation}
                  </p>
                  <p className="card-text">
                    <b>Run By :</b> {TrainSchdule.RunBy}
                  </p>
                  <p className="card-text">
                    <b>Train Name :</b> {TrainSchdule.TrainName}{" "}
                  </p>
                  <p className="card-text">
                    <b>Train Number :</b> {TrainSchdule.TrainNumber}
                  </p>
                  <p className="card-text">
                    <b>Train Type :</b> {TrainSchdule.TrainType}{" "}
                  </p>

                  <div className="personaltxt">
                    <Button
                      id="PersonalDetails"
                      size="lg"
                      variant="btn btn-success"
                      onClick={BKhandleShow}
                      className="book-now"
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
                              <ButtonIncrement />
                            </Form.Group>
                          </Form>
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={BKhandleClose}>
                          Close
                        </Button>
                        <Button
                          variant="btn btn-success"
                          onClick={BKhandleClose}
                        >
                          Book Now
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResult;
