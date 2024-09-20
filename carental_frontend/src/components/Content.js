import React from "react";
import "./Content.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faGasPump, faDroplet, faCalendar } from '@fortawesome/free-solid-svg-icons'
import Button from "./Button";





/* 

every card will display as a component using props
this function is called by app.js and the props for content came from app
at the end one card is created for every car with followings: id, name and mileage + 2 buttons 
*/

async function getImage(car) {
    const axios = require('axios');
    const options = {
        method: 'GET',
        url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
        params: { model: { car } },
        headers: {
            'x-rapidapi-key': 'f9b87a0c3fmsh687f888cb54a86dp1fb5ffjsn4fb1048d4906',
            'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }

}



function Content(props) {

    return (
        <div className="ContentAll ">

            <h1>{props.name} {props.modell}</h1>

            <img src={props.image} width="500" height="600" />
            <div className="leftDiv">
                <p>{props.price / 1000} €/per day</p>
                <p><FontAwesomeIcon icon={faDroplet} /> {props.color}</p>
                <p><FontAwesomeIcon icon={faCar} /> {props.transmission}</p>
                <p><FontAwesomeIcon icon={faGasPump} /> {props.fuelType} </p>
            </div>
            <div className="rightDiv">
                <div className="rightButtons">
                    <Button fun={() => props.onDelete(props.id)} name='delete' cond={false} />
                    <Button onClick={() => props.onEdit()} name='Edit' cond={false} />
                </div>


            </div>

        </div>
    );
}

export default Content;
