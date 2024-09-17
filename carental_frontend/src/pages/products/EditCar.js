import './AddCar.css';
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


function EditCar() {
    const navigate = useNavigate()

    async function handelSubmit(event) {
        event.preventDefault()

        const fromdata = new FormData(event.target)
        console.log(fromdata)
        const product = Object.fromEntries(fromdata.entries())
        console.log(product)
        //checks if all fields are filled 
        if (!product.make || !product.price || !product.mileage) {
            alert("fill all fields")
            return
        }
        // try to get a post request and giving it data formdata
        try { // i have tried to do it with await fetch(url, {method: "POST", body: product/fromdata}) but it does not work
            const response = await axios.patch("http://localhost:4000/Products", product)
            console.log(response)
            if (response.status !== 400) {
                alert("response is sccsess")
                navigate("/")
            } else {
                alert("validation error")
            }

        }
        catch {
            alert("unable to connect to server")
        }

    }
    return (
        <div className="container">

            <h1>add your car</h1>
            <form className="formContainer" onSubmit={handelSubmit}>
                <input

                    name="make"
                    placeholder="Car name"

                /><div>
                    <input

                        name="price"
                        placeholder="Car price"

                    />
                </div>
                <div>
                    <input
                        name="mileage"
                        placeholder="distance"
                    />
                </div>
                <div className='contButton'>
                    <button className='button'>Submit </button>
                    <Link className='button' to={'/'} >cancel</Link>
                </div>
            </form >
        </div >
    );
}

export default AddCar;