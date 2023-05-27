import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Movielist({movies, title}) {

  let [favid,setfavid] = useState([]);
  let [altered ,setAltered] = useState(0);

  useEffect(()=>{
    let favid = JSON.parse(localStorage.getItem("fav"));
    setfavid(favid.map((m)=>{return m.id}));
  },[altered]);

  let add = (movie)=>{
    let fav = JSON.parse(localStorage.getItem("fav"));
    fav.push(movie);
    localStorage.setItem("fav",JSON.stringify(fav));
    setAltered(altered+1);
  }
  let remove =(id)=>{
    let fav = JSON.parse(localStorage.getItem("fav"));
    fav = fav.filter((m)=>{return m.id!=id})
    localStorage.setItem("fav",JSON.stringify(fav));
    setAltered(altered+1);
  }
  return (
    <div>
      <h1 className='bg-slate-400 h-12 p-2 w-full text-center font-bold text-3xl' id='title'>{title}</h1>
      
      <div className=' border flex flex-wrap justify-evenly'>
       {movies.map((movie,i)=>{
         return(
          <div className='m-4' id='movie'>
            {favid.includes(movie.id) ?
              <button className=' text-red-500 hover:scale-150 ' onClick={()=>{remove(movie.id)}}><i id='empty-heart' className=' bx bxs-heart'></i></button> :
              <button className='text-center hover:scale-150' onClick={()=>{add(movie)}}><i id='filled-heart' class='bx bx-heart'></i></button>  
              
            }
            <Link to={`/Moviedetails/${movie.id}`}>
            <div className='h- w-58'  id='inside-div'>
            <img className='h-48  rounded-xl border hover:scale-105' src={movie.poster} height="250px" width="350px" alt='poster'/>
            </div>
            <h1 className=' text-slate-800 font-bold text-2xl'>{movie.moviename}</h1>
            <h3 className='text-md'>{`Hero :`+movie.hero}</h3>
            <h4 className='text-md'>{`Gener : `+movie.genre}</h4>
            </Link>
          </div>
          )})
       }
      </div>
        
    </div>
  )
}

export default Movielist
