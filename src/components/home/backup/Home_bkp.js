import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import firestore from "../../../firebase";

function Home() {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firestore.firestore().collection("schedules");

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
    <div className="flex">
      <div className="row justify-content-md-center">
        {schedules.map((schedule) => (
          <div class="col col-lg-3">
            <Card
              key={schedule.id}
              className="shadow-sm bg-white rounded card"
              border="warning"
            >
              <Card.Body>
                <Card.Title>{schedule.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {schedule.From} to {schedule.To}
                </Card.Subtitle>
                <Card.Text>
                  Strat Time: {schedule.startingTime} hrs
                  <br />
                  End Time: {schedule.endingTime} hrs
                  <br />
                  Available Classes: {schedule.classes}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
