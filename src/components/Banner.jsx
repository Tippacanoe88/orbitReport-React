import React from "react";
import './styling.css';

//Banner component displays the main header and a user instruction
const Banner = () => {
    return (
        <div>
            <h1>Orbit Report</h1> {/*Main Header/title of the page*/}
            <p>Click on the buttons to see the satellites in that orbit type</p> {
                /*Instructions for users*/
            }
        </div>
    );
}
export default Banner;