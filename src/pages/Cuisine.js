import React, { useEffect, useState } from 'react'
import { useParams, Link} from 'react-router-dom'
import { Grid , CardCuisine } from '../styled/Styled';
import { motion } from 'framer-motion';

const Cuisine = () => {
    const [cuisine , setCuisine] = useState([])
   const cuisineType =  useParams()

  
   const getCuisine = async(name)=>{
       try{
         const api= "https://api.spoonacular.com/recipes/complexSearch";
        const res =  await fetch(`${api}?apiKey=${process.env.REACT_APP_FOOD_API_KEY}&cuisine=${name}`)
        const data = await res.json();
        console.log(data.results)
        setCuisine(data.results)
        }

        catch(err)   {
            console.log(err)
        }
   
   }
    useEffect(() =>{
       getCuisine(cuisineType.type);
    // console.log(cuisineType.type)
   }, [cuisineType.type])

  return (
    <Grid>

    {cuisine.map((item) => {
        return (
            <CardCuisine key={item.id}>
                <Link to={'/recipe/'+ item.id}>
                <img src={item.image} alt={item.title}/>
                <h4>{item.title}</h4>
                </Link>
            </CardCuisine>
        )
    })}


    </Grid>
  )
}

export default Cuisine