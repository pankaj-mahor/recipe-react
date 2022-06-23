import React, { useEffect, useState } from 'react'
import { useParams , Link } from 'react-router-dom'
import { Grid , CardCuisine } from '../styled/Styled';

const SearchedPage = () => {
    const [searchedRecipe, setSearchedRecipe] = useState([]);

    const searched = useParams()
    const getSearched = async(name)=>{
       try{
         const api= "https://api.spoonacular.com/recipes/complexSearch";
        const res =  await fetch(`${api}?apiKey=${process.env.REACT_APP_FOOD_API_KEY}&query=${name}`)
        const data = await res.json();
        // console.log(data.results)
        setSearchedRecipe(data.results)
        }

        catch(err)   {
            console.log(err)
        }
   
   }

    useEffect(() =>{
       getSearched(searched.search);
    // console.log(searched.search)
   }, [searched.search])
  return (
       <Grid>

    {searchedRecipe.map((item) => {
        return (
            <CardCuisine key={item.id}>
            <Link to={"/recipe/" + item.id}>
                <img src={item.image} alt={item.title}/>
                <h4>{item.title}</h4>
             </Link>
            </CardCuisine>
        )
    })}


    </Grid>
  )
}

export default SearchedPage