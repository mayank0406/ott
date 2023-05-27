import React from 'react'
import Movielist from './Movielist';

import { useState,useEffect } from 'react';

function Revelentmovies({genre,title}) {
    let [movies,setmovies]= useState(null);
    let[error ,seterror]=useState(null);
    let[pending,setpending]= useState(true);
  
    useEffect(()=>{
      setTimeout(()=>{
        fetch("http://localhost:4000/movies")
        .then((res)=>{return res.json()})
        .then((data)=>{
          console.log(data);
          setmovies(data);
          setpending(false)
        })
        .catch((err)=>{console.log(err);
        seterror("The page you are looking for may have been moved,deleted,or possibily never existed -404")})
        setpending(false)
      },500) 
    },[])
  
  return (
    <div>

      {movies && <Movielist movies={
        movies.filter((m)=>{return m.genre.includes(genre)})} title="Releated Movies"/>
      }

    </div>
  )
}

export default Revelentmovies
