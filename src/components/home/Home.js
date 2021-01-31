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
import { db } from "../../firebase";
import DatePicker from "react-datepicker";
import SearchIcon from "@material-ui/icons/Search";
import "react-datepicker/dist/react-datepicker.css";
import { useSpring, animated } from "react-spring";
import "./Home.css";
import firebase from "firebase/app";

function Home() {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [stations, setStations] = useState([]);
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const searchNameRef = useRef();
  const fromStationRef = useRef();
  const toStationRef = useRef();

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

  const ref = db.collection("TrainSchdule");
  const Stations = db.collection("stations");

  // async function getSchedules() {
  //   setLoading(true);
  //   await ref.limit(6).onSnapshot((querySnapshot) => {
  //     const items = [];
  //     querySnapshot.forEach((doc) => {
  //       items.push(doc.data());
  //     });
  //     console.log(items);
  //     setSchedules(items);
  //     setLoading(false);
  //   });
  // }

  // change of fetch data from Firestore to get once
  async function getSchedules() {
    setLoading(true);
    await ref
      .limit(6)
      .get()
      .then((item) => {
        const items = item.docs.map((doc) => doc.data());
        setSchedules(items);
        //console.log(items);
        setLoading(false);
      });
  }

  // async function fetchStations() {
  //   setLoading(true);
  //   await Stations.limit(6)
  //     .orderBy("name")
  //     .onSnapshot((querySnapshot) => {
  //       const items = [];
  //       querySnapshot.forEach((doc) => {
  //         items.push(doc.data());
  //       });
  //       setStations(items);
  //       setLoading(false);
  //       console.log(items);
  //     });
  // }

  // change of fetch data from Firestore to get once
  async function fetchStations() {
    setLoading(true);
    await Stations.limit(4)
      .orderBy("name")
      .get()
      .then((item) => {
        const items = item.docs.map((doc) => doc.data());
        setStations(items);
        //console.log(items);
        setLoading(false);
      });
  }

  // async function handleSearch(e) {
  //   await ref
  //     .where("StartStation", "==", searchNameRef.current.value)
  //     .limit(12)
  //     .onSnapshot((querySnapshot) => {
  //       const items = [];
  //       querySnapshot.forEach((doc) => {
  //         items.push(doc.data());
  //       });
  //       console.log(items);
  //       setSchedules(items);
  //       setLoading(false);
  //     });
  // }

  async function handleFromSearch(e) {
    e.preventDefault();

    if (toCity == "") {
      await ref
        .where("StartStation", "==", fromStationRef.current.value)
        .limit(6)
        .onSnapshot((querySnapshot) => {
          const items = [];
          querySnapshot.forEach((doc) => {
            items.push(doc.data());
          });
          console.log(items);
          setSchedules(items);
          setFromCity(fromStationRef.current.value);
          setLoading(false);
        });
    } else {
      await ref
        .where("StartStation", "==", fromStationRef.current.value)
        .where("EndStation", "==", toCity)
        .limit(6)
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

    console.log(fromCity);
    //console.log(searchItem);
  }

  async function handleToSearch(e) {
    e.preventDefault();

    //setFromCity(fromStationRef.current.value);
    if (fromCity == "") {
      await ref
        .where("EndStation", "==", toStationRef.current.value)
        .limit(6)
        .onSnapshot((querySnapshot) => {
          const items = [];
          querySnapshot.forEach((doc) => {
            items.push(doc.data());
          });
          console.log(items);
          setSchedules(items);
          setToCity(toStationRef.current.value);
          setLoading(false);
        });
    } else {
      await ref
        .where("StartStation", "==", fromCity)
        .where("EndStation", "==", toStationRef.current.value)
        .limit(6)
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
    //console.log(searchItem);
  }

  const user = firebase.auth().currentUser;

  function handleClick(train) {
    db.collection("items").add({
      name: train.TrainName,
      amount: train.Amount,
      from: train.StartStation,
      to: train.EndStation,
      added: firebase.firestore.FieldValue.serverTimestamp(),
      count: 1,
      paid: false,
      user: user.uid,
    });
    console.log(train.id);
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
                      <Col
                        lg={9}
                        className="justify-content-center center-block"
                      >
                        <Row>
                          <Col lg={6}>
                            <Form.Group id="from">
                              <Form.Label>From:</Form.Label>
                              <select
                                class="form-control custom-select custom-select-lg mb-3"
                                id="fromStationSelect"
                                ref={fromStationRef}
                                onChange={handleFromSearch}
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
                                class="form-control custom-select custom-select-lg mb-3"
                                id="toStationSelect"
                                ref={toStationRef}
                                onChange={handleToSearch}
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
                <Button
                  className="btnReserve rounded-pill"
                  variant="outline-warning"
                  onClick={() => handleClick(schedule)}
                >
                  Reserve
                </Button>
              </Card.Body>
            </Card>
          ))}
        </CardColumns>
      </div>
    </Container>
  );
}

export default Home;
