import './AddCar.css';
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Button from '../../components/Button';


function AddCar() {
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
      const response = await axios.post("http://localhost:4000/Products", product)
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
    <div className="container ">
      <h1 className='font-bold mb-3'>ADD YOUR CAR</h1>

      <form className='flex flex-col items-center ' onSubmit={handelSubmit}>
        <input
          name="make"
          placeholder="Car name"
        />

        <input
          name="price"
          placeholder="Car price"
        />

        <input
          name="mileage"
          placeholder="distance"
        />
        <div className=' flex justify-between mt-4'>
          <button className='text-white bg-green-800 hover:bg-green-900 font-medium rounded-lg text-2xl px-5 py-2.5 me-2 mb-2 mx-0'>Submit</button>

          <Link className='text-white bg-red-800 hover:bg-red-900 font-medium rounded-lg text-2xl px-5 py-2.5 me-2 mb-2 mx-0' to={'/'} >cancel</Link>
        </div>
      </form >


    </div >
  );
}

export default AddCar;