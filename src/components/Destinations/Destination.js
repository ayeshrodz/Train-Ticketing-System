import React, { useState, useEffect } from "react";
import "./Destination.css";
import SearchIcon from "@material-ui/icons/Search";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Kandy from "../Images/kandy.jfif";
import Card from 'react-bootstrap/Card'
import bg from "../Images/train1.jpg"
import { Container, Row, Col } from "reactstrap";
import CardDeck from 'react-bootstrap/CardDeck'
// import {db} from "../../firebase"


function Destination() {
  // const [destination, setDestination] = useState([]);

  // useEffect(() => {
  //   db.collection("Destination").onSnapshot(snacpshot => {
  //     setDestination(snacpshot.docs.map(doc => {
  //       {

  //       }
  //     }))
  //   })
  // })
  return (
    <div>
      <div className="search-body">
        <div className=" search_input">
          <SearchIcon className="search_inputIcon" />
          <input placeholder="Destination" />

          <ArrowForwardIcon type="submit" className="search_inputIcon" />
        </div>
      </div>

      <div className = "desti-wrapper">

        
      </div>
     </div>
  );
}

export default Destination;
