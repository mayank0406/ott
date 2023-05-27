import React, { useEffect, useState } from 'react'
import Movielist from './Movielist';
import Favorites from './Favorites';

function Home() {
  let [movies,setmovies]= useState(null);
  let[error ,seterror]=useState(null);
  let[pending,setpending]= useState(true);

  useEffect(()=>{

    if( localStorage.getItem("fav") == null)
    {
      localStorage.setItem("fav" , "[]");
    }

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
    },3000) 
  },[])

  return (
    <div className='home'>

      {pending==true && <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}

      {error && <h1 className='err-line'>{error}</h1>}
      
      {movies && <Movielist movies={movies} title="All Movies"/>}

      {movies && <Movielist movies={movies.filter((m)=>{return m.genre.includes("comedy")})} title="Comedy Movies"/>}

      {movies && <Movielist movies={movies.filter((m)=>{return m.genre.includes("romance")})} title="Romantic Movies"/>}

     </div>  
  )
}

export default Home

