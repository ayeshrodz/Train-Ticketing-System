import React, { useState } from "react";
import "./Review.css";
import SearchIcon from "@material-ui/icons/Search";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import PersonIcon from "@material-ui/icons/Person";
import {FaStar} from "react-icons/fa"

const createArray = (length) => [...Array(length)];

function Star({ selected = false, onSelect }) {
  return (
    <FaStar color={selected ? "red" : "black"} onClick={onSelect} />
  );
}

//function to create the StarRating
function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return <>
  {createArray(totalStars).map((n, i) => (
    <Star
      key={i}
      selected={selectedStars > i}
      onSelect={() => setSelectedStars(i + 1)}
    />
  ))}
 
  </>
}

//Function of the Card Wrapper and the Search Bar
function Review() {
  return (
    <div className="review">
      <div className="search_input-1">
        <SearchIcon className="search_inputIcon" />
        <input placeholder="Search" />

        <ArrowForwardIcon className="search_inputIcon" />
      </div>

      <div className="card-wrapper-1">
        <div className="color-card-1 color-card-color">
          <div className="color-card-text-1">
            <PersonIcon className="person-icon" />
          </div>
        </div>

        <div className="card-text-1">
          <div className="card-inside-text-1">
            <p className="sub-card-1">
              <i>Mark Hamil</i>
            </p>
            <p className="sub-card-subtitle-1">
              <i>Best Train Trip Experience I had So Far</i>
            </p>
            <p className="sub-card-subtitle-1">Colombo-Kandy</p>
          </div>
          <div className="starIcon">
            <StarRating totalStars={5} />
          </div>
        </div>

        
      </div>

      <div className="card-wrapper-1">
        <div className="color-card-1 color-card-color">
          <div className="color-card-text-1">
            <PersonIcon className="person-icon" />
          </div>
        </div>

        <div className="card-text-1">
          <div className="card-inside-text-1">
            <p className="sub-card-1">
              <i>Mark Hamil</i>
            </p>
            <p className="sub-card-subtitle-1">
              <i>Best Train Trip Experience I had So Far</i>
            </p>
            <p className="sub-card-subtitle-1">Colombo-Kandy</p>
          </div>
          <div className="starIcon">
            <StarRating totalStars={5} />
          </div>
        </div>

        
      </div>

      <div className="card-wrapper-1">
        <div className="color-card-1 color-card-color">
          <div className="color-card-text-1">
            <PersonIcon className="person-icon" />
          </div>
        </div>

        <div className="card-text-1">
          <div className="card-inside-text-1">
            <p className="sub-card-1">
              <i>Mark Hamil</i>
            </p>
            <p className="sub-card-subtitle-1">
              <i>Best Train Trip Experience I had So Far</i>
            </p>
            <p className="sub-card-subtitle-1">Colombo-Kandy</p>
          </div>
          <div className="starIcon">
            <StarRating totalStars={5} />
          </div>
        </div>

        
      </div>

      <div className="card-wrapper-1">
        <div className="color-card-1 color-card-color">
          <div className="color-card-text-1">
            <PersonIcon className="person-icon" />
          </div>
        </div>

        <div className="card-text-1">
          <div className="card-inside-text-1">
            <p className="sub-card-1">
              <i>Mark Hamil</i>
            </p>
            <p className="sub-card-subtitle-1">
              <i>Best Train Trip Experience I had So Far</i>
            </p>
            <p className="sub-card-subtitle-1">Colombo-Kandy</p>
          </div>
          <div className="starIcon">
            <StarRating totalStars={5} />
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Review;
