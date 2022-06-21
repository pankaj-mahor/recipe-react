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

const Indian = () => {
 
  const [indianRecipe , setIndianRecipe] = useState([])
  useEffect(() => {
    getIndian()

  }, [])
  
 


  const getIndian = async () =>{
    const checkLocalStorage = localStorage.getItem('indian');

    if(checkLocalStorage){
      setIndianRecipe(JSON.parse(checkLocalStorage))
    }
    else{
     
        const api= "https://api.spoonacular.com/recipes/complexSearch";
        const res =  await fetch(`${api}?apiKey=${process.env.REACT_APP_FOOD_API_KEY}&cuisine=indian&diet=vegetarian&number=9`)
        const data = await res.json();
        localStorage.setItem('indian' , JSON.stringify(data.results))
        setIndianRecipe(data.results);  
        // console.log(data.results);  
    }
  }
  return (
    <div>
        <Wrapper >
          <h3>Popular Indian</h3>
          <Splide options={{
                perPage: 3,
                arrows:false,
                pagination: false,
                drag: 'free',
                gap: '2rem'
              }} >
          {indianRecipe?.map((recipe) =>{

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

export default Indian