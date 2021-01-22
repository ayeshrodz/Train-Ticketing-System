import React ,{useState} from "react";
import Form from "react-bootstrap/Form";
import "./Home.css";
import TextField from "@material-ui/core/TextField";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import IconButton from '@material-ui/core/IconButton';


function Home() {

  const [fromKeyword, setInput] = useState ("");
  const [toKeyword, setSearchValue] = useState ("");

  var curr = new Date();
curr.setDate(curr.getDate() + 0);
var date = curr.toISOString().substr(0,10);

  function fetchData () {
    if(fromKeyword !== "" && toKeyword !== "") {
      window.location.href = '/searchresult?from='+ fromKeyword +  toKeyword
    }else {
      alert("no value")
    }
  }
  return (
    <div className = "bgcr">
      <div className="home1">
     <div align = "center" className = "chin">
     <h2 className="topic-2">Plan Your Journey With Us</h2>
     </div>
      <Form className="Search-Form">
        <div className="input-search">
          <input placeholder="From" value = {fromKeyword} onChange = {e => setInput(e.target.value)}/>
        </div>
        <div className="input-search">
          <input placeholder="To" value = {toKeyword} onChange = {e => setSearchValue(e.target.value)}/>
        </div>
        <div className="DatePicker-Search">
          <TextField
            type = "date"
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
        <div className = "next-btn-home">
              <ArrowForwardIcon className="arrow-right-home" onClick = {fetchData}/> 
        </div>
      </Form>
    </div>
    </div>
  );
}

export default Home;