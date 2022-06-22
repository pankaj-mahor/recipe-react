import React from 'react'
import { FormStyle } from '../styled/Styled';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
const Search = () => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();
    const handleSearch =(e) =>{
        setInput(e.target.value)
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        
        navigate('/searched/' + input)
    }
  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
        <FaSearch />
        <input type="text" value={input} onChange={handleSearch} placeholder='Search Recipe....'/>
        </div>
    
    </FormStyle>
  )
}

export default Search