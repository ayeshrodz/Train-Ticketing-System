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
import "react-datepicker/dist/react-datepicker.css";
import "./Home.css";

function Home() {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

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

  useEffect(() => {
    getSchedules();
  }, []);

  if (loading) {
    return <h2>Loading..</h2>;
  }

  return (
    <Container>
      <Accordion className="mb-4 search">
        <Card className="search" id="search">
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Let's find your Train..
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Form>
                <Row>
                  <Col lg={4}>
                    <Form.Group id="from">
                      <Form.Label>From:</Form.Label>
                      <Form.Control
                        size="lg"
                        type="input"
                        required
                        placeholder="Type Station Name"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={4}>
                    <Form.Group id="to">
                      <Form.Label>To:</Form.Label>
                      <Form.Control
                        size="lg"
                        type="input"
                        required
                        placeholder="Type Station Name"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={4}>
                    <Form.Group id="date">
                      <Form.Label>Date</Form.Label>
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
                </Row>
              </Form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <Container>
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
    </Container>
  );
}

export default Home;
