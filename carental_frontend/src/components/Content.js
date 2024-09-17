import React from "react";
import "./Content.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faGasPump, faDroplet, faCalendar } from '@fortawesome/free-solid-svg-icons'







/* 

every card will display as a component using props
this function is called by app.js and the props for content came from app
at the end one card is created for every car with followings: id, name and mileage + 2 buttons 

*/


function Content(props) {

    return (
        <div className="ContentAll ">
            <div className="leftDiv">
                <h1>{props.name} {props.modell}</h1>
                <img src={props.image} alt="Girl in a jacket" width="500" height="600" />
                <p>{props.price / 1000} €/per day</p>

            </div>
            <div className="rightDiv">
                <div>
                    <p><FontAwesomeIcon icon={faCalendar} /> {props.year}</p>
                    <p><FontAwesomeIcon icon={faDroplet} /> {props.color}</p>
                    <p><FontAwesomeIcon icon={faCar} /> {props.transmission}</p>
                    <p><FontAwesomeIcon icon={faGasPump} /> {props.fuelType} </p>
                </div>
                <div className="rightButtons">
                    <button onClick={() => props.onDelete(props.id)}>delete</button>
                    <button onClick={() => props.onEdit()}>Edit</button>
                </div>


            </div>

        </div>
    );
}

export default Content;
