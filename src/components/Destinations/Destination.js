import React, {useState,useEffect} from "react";
import "./Destination.css";
import SearchIcon from "@material-ui/icons/Search";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Kandy from "../Images/kandy.jfif"
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
     <div  className = "search-body">
     <div className=" search_input">
        <SearchIcon className="search_inputIcon" />
        <input placeholder="Destination" />

        <ArrowForwardIcon type="submit" className="search_inputIcon" />
      </div>
     </div>

     <div className = "row">
      <a className = "destination-wrapper">

      </a>

    
     </div>

    
    </div>

    
  );
}

export default Destination;
