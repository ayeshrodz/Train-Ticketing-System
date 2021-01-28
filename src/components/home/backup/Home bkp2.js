import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./Home.css";
import TextField from "@material-ui/core/TextField";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import IconButton from "@material-ui/core/IconButton";
import From from "./From";
import Autocomplete from "@material-ui/lab/Autocomplete";
import firestore from "../../../firebase";

function Home() {
  const [fromKeyword, setInput] = useState("");
  const [toKeyword, setSearchValue] = useState("");

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

  var curr = new Date();
  curr.setDate(curr.getDate() + 3);
  var date = curr.toISOString().substr(0, 10);

  function fetchData() {
    if (fromKeyword !== "" && toKeyword !== "") {
      window.location.href = "/searchresult?from=" + fromKeyword + toKeyword;
    } else {
      alert("no value");
    }
  }
  return (
    <div className="home1">
      <h2 className="topic-2">Plan Your Journey With Us</h2>
      <Form className="Search-Form">
        <div>
          {/* <input placeholder="From" value = {fromKeyword} onChange = {e => setInput(e.target.value)}/> */}
          <div className="input-search">
            <Autocomplete
              className="input-search"
              {...defaultProps}
              id="clear-on-escape"
              clearOnEscape
              value={fromKeyword}
              onChange={(e) => setInput(e.target.value)}
              renderInput={(params) => (
                <TextField {...params} label="From" margin="normal" />
              )}
            />
          </div>
        </div>
        <div className="input-search">
          <Autocomplete
            className="input-search"
            {...defaultProps}
            id="clear-on-escape"
            clearOnEscape
            value={toKeyword}
            onChange={(e) => setInput(e.target.value)}
            renderInput={(params) => (
              <TextField {...params} label="To" margin="normal" />
            )}
          />
        </div>
        <div className="DatePicker-Search">
          <TextField
            type="date"
            id="date"
            label="Date"
            type="date"
            className="DatePicker-Search"
            defaultValue={date}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="next-btn-home">
          <ArrowForwardIcon className="arrow-right-home" onClick={fetchData} />
        </div>
      </Form>
    </div>
  );
}

export default Home;
