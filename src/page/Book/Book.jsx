import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Book = () => {
    const [book, setBook] = useState([]);
    const navigate = useNavigate();

    const fetchBook = async () => {
        try {
            const response = await axios.get("http://localhost:8800/books");
            setBook(response.data);
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchBook();
    }, [book])

    const deleteHandler =async (id)=>{
        const response = await axios.delete("http://localhost:8800/books/"+id);
        console.log(response)
    }

    return (
        <div className="book-list">
            <div className='add-btn'>
                <button style={{color:"green"}} onClick={()=>navigate("/add")}>Add a new book</button>
            </div>
            <div className='book-grid'>
            {
                book.map((b, index) => (<div key={index} className='book'>
                    <div>
                        <div className='book_cover'>
                        <img src={b.book_cover} alt="book cover"  />
                        </div>
                        <h2>{b.book_title}</h2>
                        <p>{b.book_desc}</p>
                        <p>{b.book_price}</p>
                        <button
                        style={{color:"blue"}}
                        onClick={()=>{
                            navigate(`/update/${b.book_id}`)
                        }}
                        
                        >Update</button>
                        <button
                        style={{color:"red"}}
                        onClick={()=>{
                           deleteHandler(b.book_id)
                        }}
                        >Delete</button>
                    </div>
                </div>))
            }
            </div>
            
            
            
        </div>
    )
}


export default Book