import React, { useState } from 'react'
import {useEffect} from 'react'

import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';
// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

//Custom Styled
import { Wrapper , Card , Gradient } from '../styled/Styled';
const Popular = () => {

  const [popularRecipe , setPopularRecipe] = useState([])
  useEffect(() => {
    getPopular()

  }, [])
  
 


  const getPopular = async () =>{
    const checkLocalStorage = localStorage.getItem('popular');

    if(checkLocalStorage){
      setPopularRecipe(JSON.parse(checkLocalStorage))
    }
    else{

      const api= "https://api.spoonacular.com/recipes/random";
      const res =  await fetch(`${api}?apiKey=${process.env.REACT_APP_FOOD_API_KEY}&number=9&tags=vegetarian`)
      const data = await res.json();
      localStorage.setItem('popular' , JSON.stringify(data.recipes))
      setPopularRecipe(data.recipes);  
      console.log(data.recipes);  
    }
  }
  return (
    <div>
        <Wrapper >
          <h3>Popular Picks</h3>
          <Splide options={{
                perPage: 4,
                arrows:false,
                pagination: false,
                drag: 'free',
                gap: '2rem'
              }} >
          {popularRecipe?.map((recipe) =>{

            return (  
              <SplideSlide 
              key={recipe.id}>
                <Card >
                  <Gradient />                  
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title}></img>
                </Card>
              </SplideSlide>
            );
          })}
          </Splide>
        </Wrapper>
    </div>
  )
}


export default Popular