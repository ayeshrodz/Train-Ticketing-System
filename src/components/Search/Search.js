import React from 'react'
import Logo from "../Images/logo.jpg"
import SearchIcon from "@material-ui/icons/Search"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import "../css/App.css";

function Search() {
    return (
        <div className = "search-body">
            <img src = {Logo} className = "Search-logo" alt = "logo"/>
            <h1 className = "search-heading">Chin-Chin</h1>

            <div className = "search_input">
                <SearchIcon className = "search_inputIcon"/>
                <input placeholder = "Destination"/>

            </div>
        </div>
    )
}

export default Search
