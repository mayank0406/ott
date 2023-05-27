import React from 'react'
import { useRef,useParams } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

function EditMovie() {

  let {id} = useParams();

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

  let handleEditMovie = (e)=>{

    e.preventDefault();
    
    //create a new object
    let UpdatedMovie = {
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
              UpdatedMovie.languages.push(options[i].value)
            }
            
          }
          console.log(UpdatedMovie);

    // send tthe movie to the database

    fetch("http://localhost:4000/movies/"+id,
    {
      method : "PUT",
      headers : {"content-Type" : "application/json"},
      body : JSON.stringify(UpdatedMovie)
    }
    )
    .then(()=>{
      alert("Movie Edited In database");
      navigate("/Moviedetails/"+id)
    
    })
  }
  return (
    <div id='add-movie-c'>
      <h1>Add Movie</h1>
      <form action="" onSubmit={handleEditMovie}>
      <input type="text" placeholder='Movie Name...' ref={moviename} />
      <input type="text" placeholder='Actor...' ref={actor} />
      <input type="text" placeholder='Actress...' ref={actress} />
      <input type="text" placeholder='Director...' ref={director} />
      <fieldset>
        <legend>Select language</legend>
      <input type="checkbox" value="Kannada" name='lang' id='kannada' placeholder='Language...' /><label htmlFor='kannada' >Kannada</label>
      <input type="checkbox" value="English" name='lang' id='English' placeholder='Language...' /><label htmlFor='English'>English</label>
      <input type="checkbox" value="Hindi" name='lang' id='Hindi' placeholder='Language...' /><label htmlFor='Hindi'>Hindi</label>
      <input type="checkbox" value="Tamil" name='lang' id='kannada' placeholder='Language...' /><label htmlFor='kannada'>Tamil</label>
      </fieldset>
      <input type="text" placeholder='Genre...' ref={genre} />
      <input type="url" placeholder='Poster...Link' ref={poster} />
      <input type="url" placeholder='Trailer...Link' ref={trailer} />
      <input type="text" min="1950" max="2024" placeholder='Release date...' ref={release} />
      <input type="text" step="0.1" min="1" max="10" placeholder='Rating...' ref={rating} />
      <textarea rows="6" cols="70" placeholder='Synopsos...' ref={synopsos} />

      <input id='edit-btn' type="submit"  value="Update"/>

      </form>
      
    </div>
  )
}

export default EditMovie
