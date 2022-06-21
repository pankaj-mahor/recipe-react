import React, { useState } from 'react'
import {useEffect} from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';
// or other themes
// import '@splidejs/react-splide/css/skyblue';
// import '@splidejs/react-splide/css/sea-green';
// // or only core styles
// import '@splidejs/react-splide/css/core';
//Custom Styled Components
import { Wrapper , Card , Gradient } from '../styled/Styled';
const Veggie = () => {
    const [veggies , setVeggies] = useState([]);
    useEffect(() => {
        getVeggie();
        
    }, [])
  
 


  const getVeggie = async () =>{
    const checkLocalStorage = localStorage.getItem('veggie');

    if(checkLocalStorage){
      setVeggies(JSON.parse(checkLocalStorage))
    }
    else{

      const api= "https://api.spoonacular.com/recipes/random";
      const res =  await fetch(`${api}?apiKey=${process.env.REACT_APP_FOOD_API_KEY}&number=9&tags=vegetarian`)
      const data = await res.json();
      localStorage.setItem('veggie' , JSON.stringify(data.recipes))
      setVeggies(data.recipes);  
      console.log("From Veggie" + data.recipes);  
    }
  }
  return (
    <div>
         <Wrapper >
          <h3>Our Veggie Picks</h3>
          <Splide options={{
                perPage: 3,
                arrows:false,
                pagination: false,
                drag: 'free',
                gap: '2rem'
              }} >
          {veggies?.map((veggie) =>{

            return (  
              <SplideSlide 
              key={veggie.id}>
                <Card >
                  <Gradient />                  
                  <p>{veggie.title}</p>
                  <img src={veggie.image} alt={veggie.title}></img>
                </Card>
              </SplideSlide>
            );
          })}
          </Splide>
        </Wrapper>
    </div>
  )
}

export default Veggie