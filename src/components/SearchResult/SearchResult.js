import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import "./SearchResult.css";
import Form from "react-bootstrap/Form";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import firebaseDb from "../../firebase";

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

        <div className="next-btn-result">
          <ArrowForwardIcon className="arrow-right-home" />
        </div>
      </Form>
      <div className="row card-wrapper">
       
           <div className="col-sm-4">
           <div className="card">
             <div className="card-body">
               <h5 className="card-title">Colombo - Kandy</h5>
               <p className="card-text">Start Station :</p>
               <p className="card-text">End Station :</p>
               <p className="card-text">Departure Time : </p>
               <p className="card-text">Destination : </p>
               <p className="card-text">Arrival at Destination : </p>
               <p className="card-text">Arrival at End Station :</p>
               <p className="card-text">Run By : </p>
               <p className="card-text">Train Name : </p>
               <p className="card-text">Train Number : </p>
               <p className="card-text">Train Type : </p>
 
               <a href="#" className="btn btn-success">
                 Book Now
               </a>
             </div>
           </div>
         </div>
      
      </div>
    </div>
  );
}

export default SearchResult;
