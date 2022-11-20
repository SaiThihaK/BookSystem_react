import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const [book,setBook] = useState({
    book_title:"",
    book_desc:"",
    book_cover:"",
    book_price:""
  });
const navigate = useNavigate();

  const handleChange = (e)=>{
    setBook((prev)=>({...prev,[e.target.name]:e.target.value}))
  }


const handleClick = async(e)=>{
    e.preventDefault();
    try{
  const response =await axios.post("http://localhost:8800/books",book);
  console.log(response);
  navigate('/');
    }catch(err){
        console.log(err)
    }
}
  return (
    <div className='form'>
<h1>Add a new book</h1>
<input type="text" placeholder='title' name='book_title' onChange={handleChange} />
<input type="text" placeholder='desc'  name='book_desc'  onChange={handleChange}/>
<input type="text" placeholder='cover' name='book_cover' onChange={handleChange}/>
<input type="number" placeholder='price' name='book_price' onChange={handleChange}/>
<button type="submit" onClick={handleClick}>Add</button>
</div>
  )
}

export default Add