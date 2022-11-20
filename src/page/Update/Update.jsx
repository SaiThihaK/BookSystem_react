import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
  const [book,setBook] = useState({
    book_title:"",
    book_desc:"",
    book_cover:"",
    book_price:""
  });
const navigate = useNavigate("/");
const {id} = useParams();

  const handleChange = (e)=>{
    setBook((prev)=>({...prev,[e.target.name]:e.target.value}))
  }


const handleClick = async(e)=>{
    e.preventDefault();
    try{
  await axios.put("http://localhost:8800/books/"+id,book);
  navigate("/")
    }catch(err){
        console.log(err)
    }
}
  return (
<div className='form'>
<h1>Update the new book</h1>

<input type="text" placeholder='title' name='book_title' onChange={handleChange} />
<input type="text" placeholder='desc'  name='book_desc'  onChange={handleChange}/>
<input type="text" placeholder='cover' name='book_cover' onChange={handleChange}/>
<input type="number" placeholder='price' name='book_price' onChange={handleChange}/>
<button type="submit" onClick={handleClick}>Update</button>


    </div>
  )
}

export default Update