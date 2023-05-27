import React from 'react'
import { useRef } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Addmovie() {

  let navigate = useNavigate();

  let moviename= useRef();
  let actor= useRef();
  let actress= useRef();
  let director = useRef();
  let genre= useRef();
  let poster= useRef();
  let trailer= useRef();
  let release= useRef();
  let rating= useRef();
  let synopsos= useRef();

  let handleAddNewMovie = (e)=>{

    e.preventDefault();
    
    //create a new object
    let newMovie = {
            moviename: moviename.current.value,                                    // i can do document.getElementById("").value
            hero: actor.current.value,
            heroine: actress.current.value,
            director: director.current.value,
            languages: [

            ],
            genre: genre.current.value,
            poster: poster.current.value,
            trailer: trailer.current.value,
            release: release.current.value,
            rating: rating.current.value,
            synopsis: synopsos.current.value
    
          }

          let options = document.getElementsByName("lang");
          for (let i = 0; i < options.length; i++) {
           
            if(options[i].checked==true){
              newMovie.languages.push(options[i].value)
            }
            
          }
          console.log(newMovie);

    // send tthe movie to the database

    fetch("http://localhost:4000/movies",
    {
      method : "POST",
      headers : {"content-Type" : "application/json"},
      body : JSON.stringify(newMovie),
    }
    )
    .then(()=>{
      alert("New Mvoie Added");
      navigate("/")
    
    })
    // alert("hey") -> to check it is working or not
  }
  return (
    <div id='add-movie-c' className='bg-gray-400 w-1/2 rounded-xl shadow-md shadow-red-200 m-auto mb-6 h-auto text-center' >
      <h1 className=' h-12 text-center p-1 m-6 text-3xl text-slate-900 font-bold'>Add Movie</h1>
      <form className='text-center' action="" onSubmit={handleAddNewMovie}>
      <input className='w-96  block h-8 p-2 rounded-xl m-auto mb-3 border-r-gray-200' type="text" placeholder='Movie Name...' ref={moviename} />
      <input className='w-96 block h-8 p-2 rounded-xl m-auto mb-3 border-r-gray-200' type="text" placeholder='Actor...' ref={actor} />
      <input className='w-96 block h-8 p-2 rounded-xl m-auto mb-3 border-r-gray-200' type="text" placeholder='Actress...' ref={actress} />
      <input className='w-96 block h-8 p-2 rounded-xl m-auto mb-3 border-r-gray-200' type="text" placeholder='Director...' ref={director} />
      <div  className=' rounded-xl h-20 w-22  mb-5 mt-5'>
      <fieldset>
        <legend className=' rounded-xl m-2'>Select language</legend>
      <input className='w-auto h-4  rounded-xl m-auto  mb-3 border-r-gray-200' type="checkbox" value="Kannada" name='lang' id='kannada' placeholder='Language...' /><label htmlFor='kannada' >Kannada</label>
      <input className='w-auto h-4 p-4 rounded-xl m-auto mb-3 border-r-gray-200' type="checkbox" value="English" name='lang' id='English' placeholder='Language...' /><label htmlFor='English'>English</label>
      <input className='w-auto h-4 p-4 rounded-xl m-auto mb-3 border-r-gray-200' type="checkbox" value="Hindi" name='lang' id='Hindi' placeholder='Language...' /><label htmlFor='Hindi'>Hindi</label>
      <input className='w-auto h-4 p-4 rounded-xl m-auto mb-3 border-r-gray-200' type="checkbox" value="Tamil" name='lang' id='kannada' placeholder='Language...' /><label htmlFor='kannada'>Tamil</label>
      </fieldset>
      </div>
      <input className=' block w-96 h-8 p-2 rounded-xl m-auto mb-3 border-r-gray-200' type="text" placeholder='Genre...' ref={genre} />
      <input className=' block w-96 h-8 p-2 rounded-xl m-auto mb-3 border-r-gray-200' type="url" placeholder='Poster...Link' ref={poster} />
      <input className=' block w-96 h-8 p-2 rounded-xl m-auto mb-3 border-r-gray-200' type="url" placeholder='Trailer...Link' ref={trailer} />
      <input className=' block w-96 h-8 p-2 rounded-xl m-auto mb-3  border-r-gray-200' type="text" min="1950" max="2024" placeholder='Release date...' ref={release} />
      <input className=' block w-96 h-8 p-2 rounded-xl m-auto mb-3  border-r-gray-200' type="text" step="0.1" min="1" max="10" placeholder='Rating...' ref={rating} />
      <textarea className=' block w-auto h-8 p-2 rounded-xl m-auto mb-3 border-r-gray-200' rows="20" cols="50" placeholder='Synopsos...' ref={synopsos} />

<div>

      <input className='w-40 h-8 m-4 font-bold text-xl bg-black text-white rounded-xl  border-r-gray-200' id='add-btn' type="submit"  value="Add"/>
</div>

      </form>
      
    </div>
  )
}

export default Addmovie
