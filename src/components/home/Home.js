import React, { useState, useEffect } from "react";
import {
  Form,
  Container,
  Accordion,
  Card,
  Row,
  Col,
  Button,
  CardColumns,
} from "react-bootstrap";
import firestore from "../../firebase";
import DatePicker from "react-datepicker";
import SearchIcon from "@material-ui/icons/Search";
import "react-datepicker/dist/react-datepicker.css";
import { useSpring, animated } from "react-spring";
import "./Home.css";

function Home() {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const [state, toggle] = useState(true);
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  });

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const ref = firestore.firestore().collection("TrainSchdule");

  function getSchedules() {
    setLoading(true);
    ref.limit(12).onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setSchedules(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getSchedules();
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <h2>Loading Content of Home Page...</h2>
      </div>
    );
  }

  return (
    <Container className="justify-content-md-center">
      <h2 className="topic mt-4">Plan Your Journey With Us</h2>
      <div>
        <animated.div
          style={{
            transform: x
              .interpolate({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [1, 0.97, 0.9, 1, 1.1, 1.03, 1],
              })
              .interpolate((x) => `scale(${x})`),
          }}
        >
          <Accordion className="mb-4 mt-4 search">
            <Card className="search">
              <Accordion.Toggle
                onClick={() => toggle(!state)}
                as={Card.Header}
                eventKey="0"
              >
                <SearchIcon className="search_inputIcon" />{" "}
                <b>Let's find you a Train ...</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Form>
                    <Row>
                      <Col lg={3} className="pl-4">
                        <Form.Group id="date">
                          <Form.Label>Date:</Form.Label>
                          <br />
                          <DatePicker
                            className="datePicker lg-4"
                            selected={startDate}
                            onChange={onChange}
                            dateFormat="dd-MMM-yyyy"
                            startDate={startDate}
                            endDate={endDate}
                            minDate={new Date()}
                            selectsRange
                            inline
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={9}>
                        <Row>
                          <Col lg={6}>
                            <Form.Group id="from">
                              <Form.Label>From:</Form.Label>
                              <Form.Control
                                type="input"
                                required
                                placeholder="Type Station Name"
                              />
                            </Form.Group>
                          </Col>
                          <Col lg={6}>
                            <Form.Group id="to">
                              <Form.Label>To:</Form.Label>
                              <Form.Control
                                type="input"
                                required
                                placeholder="Type Station Name"
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row className="mt-4">
                          <Col lg={6}>
                            <Form.Group id="name">
                              <Form.Label>Name:</Form.Label>
                              <Form.Control
                                type="input"
                                required
                                placeholder="Type the Name of the Train"
                              />
                            </Form.Group>
                          </Col>
                          <Col lg={6}>
                            <Form.Group id="classes">
                              <Form.Label>Class:</Form.Label>
                              <select
                                class="form-control"
                                id="exampleFormControlSelect1"
                              >
                                <option>Third Class</option>
                                <option>Second Class</option>
                                <option>First Class</option>
                              </select>
                            </Form.Group>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </animated.div>
      </div>

      <div className="row justify-content-md-center">
        <CardColumns>
          {schedules.map((schedule) => (
            <Card
              key={schedule.id}
              className="mt-2 hover-shadow-sm bg-white rounded card train-schedule"
              border="warning"
            >
              <Card.Body>
                <Card.Title>{schedule.TrainName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {schedule.StartStation} to {schedule.EndStation}
                </Card.Subtitle>
                <Card.Text>
                  Strat Time: {schedule.ArrivalStation} hrs
                  <br />
                  End Time: {schedule.ArrivalDestination} hrs
                  <br />
                  Available Classes: {schedule.Classes}
                </Card.Text>
                <Button variant="outline-warning">Reserve Now</Button>
              </Card.Body>
            </Card>
          ))}
        </CardColumns>
      </div>
    </Container>
  );
}

export default Home;
