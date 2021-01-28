import React, {useState, useEffect} from "react";
import "./Destination.css";
import { Link } from "react-router-dom";
import firestore from "../../firebase";

function Destination() {
  const ref = firestore.firestore().collection("destinations");
  const [destination, setDestination] = useState([]);


  function getDestination() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setDestination(items);
    });
  }

  useEffect(() => {
    getDestination();
  }, []);


  return (
    <div className="row desination-row">
      {destination.map((destination) => (
      
      <a  href = {destination.destiLink}>
        
        <img className="card-wrapper" src = {destination.destiimage} />
       <div className = "destination-topic" >  <h3 >{destination.destiDescription}</h3></div>
       
      </a>
  
      ))}
    </div>
  );
}

export default Destination;
