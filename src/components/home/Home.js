import React ,{useState} from "react";
import Form from "react-bootstrap/Form";
import "./Home.css";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

function Home() {

  const [fromKeyword, setInput] = useState ("");
  const [toKeyword, setSearchValue] = useState ("");

  function fetchData () {
    if(fromKeyword != "" && toKeyword != "") {
      window.location.href = '/result?from='+ fromKeyword + '/result?to=' + toKeyword
    }else {
      alert("no value")
    }
  }
  return (
    <div className="home">
      <h2 className="topic-2">Plan Your Journey With Us</h2>
      <Form className="Search-Form">
        <div className="input-search">
          <input placeholder="From" value = {fromKeyword} onChange = {e => setInput(e.target.value)}/>
        </div>
        <div className="input-search">
          <input placeholder="To" value = {toKeyword} onChange = {e => setSearchValue(e.target.value)}/>
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
        <div className = "next-btn-home">
        <Link to="/result">
              <ArrowForwardIcon className="arrow-right-home" onClick = {fetchData}/>
            </Link>
        </div>
      </Form>
    </div>
  );
}

export default Home;