import React from "react";
import TextField from "@material-ui/core/TextField";
import "./SearchResult.css";
import Form from "react-bootstrap/Form";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SearchLogo from "../Images/search-result.jpeg";

function SearchResult() {
  return (
    <div>
      <Form className="SearchResult-Form">
        <div className="input-search-result">
          <input placeholder="From" />
          <ArrowDropDownIcon className="dropdown-icon" />
        </div>
        <div className="input-search-result">
          <input placeholder="To" />
          <ArrowDropDownIcon className="dropdown-icon" />
        </div>
        <div className="DatePicker-Result">
          <TextField
            id="date"
            label="Date"
            type="date"
            className="DatePicker-Result"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

        <button type="button" class="btn-search btn-primary">
          Search
        </button>
      </Form>
      <div className="card-wrapper">
        <div className="text-inside">
          <p>Colombo To Badulla</p>
          <img src={SearchLogo} alt="" className="Search-Logo" />
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
