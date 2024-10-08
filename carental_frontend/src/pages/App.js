import './App.css';
import React, { useEffect, useState } from 'react';
import Content from '../components/Content';
import { Link } from 'react-router-dom';
import Button from '../components/Button';


function App() {
  const [products, setProducts] = useState([]);

  // function to delete an Item 
  async function deleteItem(id) {

    await fetch(
      `http://localhost:4000/Products/${id}`,
      { method: "DELETE" }
    );
    setProducts(products.filter((product) => product.id !== id));


  }


  function getProduct() {
    fetch("http://localhost:4000/Products")
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw new Error();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        alert("error fetching");
      });
  }
  // useEffect to call the function one time 
  useEffect(getProduct, [])


  /* 
  rendering: 
  AddCar component where i can add new items into api
  conente : here i loop through json file and pass some information of every car as an argument into content where every car is rendered alone 
  
  */
  return (
    <div className="App text-xl overflow-hidden">
      <div className='App-group flex items-center justify-between mx-5 py-5'>
        <Link className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-2xl px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700' to={'/createItem'}>Add Car</Link>
        <input className='rounded-lg text-2xl px-5 py-2.5 me-2 mb-2'
          placeholder="search..."
        />
      </div>

      <div className="map">
        {products.map((product, index) => (
          <div key={index}>
            <Content
              key={index}  // Set the unique key based on the index
              id={product.id}  // Assuming each product has an id
              name={product.make}  // Render product name
              price={product.price}
              mileage={product.mileage}
              modell={product.model}
              image={product.image}
              color={product.color}
              transmission={product.transmission}
              year={product.year}
              fuelType={product.fuelType}
              onDelete={deleteItem}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
