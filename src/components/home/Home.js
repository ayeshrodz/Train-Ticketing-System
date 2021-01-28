import React, { useState, useEffect, useRef } from "react";
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
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [stations, setStations] = useState([]);

  const searchNameRef = useRef();

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
  const Stations = firestore.firestore().collection("stations");
  const citiesRef = firestore.firestore().collection("schedules");

  async function getSchedules() {
    setLoading(true);
    await ref.limit(12).onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      console.log(items);
      setSchedules(items);
      setLoading(false);
    });
  }

  async function fetchStations() {
    setLoading(true);
    await Stations.orderBy("name").onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setStations(items);
      setLoading(false);
      console.log(items);
    });
  }

  async function handleSearch(e) {
    await ref
      .where("StartStation", "==", searchNameRef.current.value)
      .limit(12)
      .onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        console.log(items);
        setSchedules(items);
        setLoading(false);
      });
  }

  useEffect(() => {
    getSchedules();
    fetchStations();
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
                  <Form onSubmit={handleSearch}>
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
                      <Col
                        lg={9}
                        className="justify-content-center center-block"
                      >
                        <Row>
                          <Col lg={6}>
                            <Form.Group id="from">
                              <Form.Label>From:</Form.Label>
                              <select
                                class="form-control"
                                id="fromStationSelect"
                              >
                                {stations.map((station) => (
                                  <option
                                    key={station.name}
                                    value={station.name}
                                  >
                                    {station.name}
                                  </option>
                                ))}
                              </select>
                            </Form.Group>
                          </Col>
                          <Col lg={6}>
                            <Form.Group id="to">
                              <Form.Label>To:</Form.Label>
                              <select
                                class="form-control"
                                id="fromStationSelect"
                              >
                                {stations.map((station) => (
                                  <option
                                    key={station.name}
                                    value={station.name}
                                  >
                                    {station.name}
                                  </option>
                                ))}
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
      <div className="pt-4">
        <h2 className="train-list">Available Trains for you</h2>
      </div>

      <div className="justify-content-md-center">
        <CardColumns>
          {schedules.map((schedule) => (
            <Card
              key={schedule.id}
              className="mt-2 hover-shadow-sm bg-white rounded col-md train-schedule"
            >
              <Card.Body>
                <Card.Title>{schedule.TrainName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {schedule.StartStation} to {schedule.EndStation}
                </Card.Subtitle>
                <Card.Text>
                  Start Time: {schedule.ArrivalStation} hrs
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
