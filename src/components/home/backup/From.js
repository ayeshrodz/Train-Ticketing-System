import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import firestore from "../../../firebase";
import Form from "react-bootstrap/Form";

export default function From() {
  const [Trainschedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(false);
  const ref = firestore.firestore().collection("TrainSchdule");
  const defaultProps = {
    options: Trainschedules,
    getOptionLabel: (TrainSchdule) => TrainSchdule.title,
  };
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
  const flatProps = {
    TrainSchdule: Trainschedules.map(
      (TrainSchdule) => TrainSchdule.StartStation
    ),
  };

  const [value, setValue] = React.useState(null);

  return (
    <div style={{ width: 300 }}>
      <Form className="Search-Form">
        <div>
          <Autocomplete
            className="input-search"
            {...defaultProps}
            id="clear-on-escape"
            clearOnEscape
            renderInput={(params) => (
              <TextField {...params} label="From" margin="normal" />
            )}
          />
        </div>

        <div></div>
      </Form>
    </div>
  );
}
