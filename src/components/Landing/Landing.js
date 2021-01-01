import React from 'react'
import  "./Landing.css"
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Logo from "../Images/logo.png"
function Landing() {
    return (
        <div>
            <div className = "bgcr">
                <div className = "landing">
                    <div  align = "center" className = "heading">
                        <img src = {Logo} className = "logo" alt = "logo"/>
                        <h1 className = "slogan">Chin-Chin</h1>
                        <h3 className = "slogan-2">Online Train Ticket Booking Platform</h3>
                    </div>
                    <div className = "arrow" width = "100%">
                        <div className = "next-btn">
                            <Link to = "/home">
                            <ArrowForwardIcon className = "arrow-icon"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
