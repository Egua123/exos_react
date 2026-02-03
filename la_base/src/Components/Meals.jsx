import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import "../Styles/meals.css"

function Meals() {
  const [items, setItems] = useState([]);

  useEffect (() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then(response => {
        setItems(response.data.meals);
      })
      .catch(error => {
        console.error("Error fetching meals:", error);
      });
  }, []);
    const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => { 
       return (  
                <section  key={idMeal} className="card">
                    <img src={strMealThumb} alt={strMeal} />
                    <section className="content">
                        <p>{strMeal}</p>
                        <p>#{idMeal}</p>
                    </section>
                </section>
    )})




   
  return (
    <div className='items-container'>
      {itemsList}
    </div>
  )
}

export default Meals
