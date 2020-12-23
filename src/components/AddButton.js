import React from "react";
import "./styles/AddButton.css";
import buttonImg from "../images/add.png";
import { Link } from "react-router-dom";

const AddButton = () => (
    <Link to="/exercise/new">
        <img src={buttonImg} className="Fitness-Add" />
    </Link>
);

/* function AddButton(props) {
    return(
        <Link to="/exercise/new">
            <img src={buttonImg} className="Fitnes-Add"/>
        </Link>
    )
    
} */

export default AddButton;
