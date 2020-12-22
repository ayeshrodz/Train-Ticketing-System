import { ArrowForward } from '@material-ui/icons';
import React from 'react'
import "../css/App.css";
import Logo from "./Images/logo.jpg"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {Link} from 'react-router-dom'

function Landing() {
    return (
        <div className = "bgcr">
            <div className = "landing">
                <div align = "center" className = "chinchin">
                    <img src = {Logo} className = "logo" alt = "logo"/>
                    <h1 className = "heading">Chin-Chin</h1>
                    <h2><i>Online Train Booking Platoform in Sri Lanka</i></h2>
                </div>
            </div>
            <div className = "arrow" width = "100%">
                <div className = "next-btn">
                    <Link to = "/search">
                    <ArrowForwardIcon/>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export default Landing
