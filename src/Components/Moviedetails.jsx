import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import Revelentmovies from './Revelentmovies';
import { Navigate, useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

function Moviedetails() {
    let navigate = useNavigate();
    let { id } = useParams()
    let [movie, setmovie] = useState(null);
    let [error, seterror] = useState(null);
    let [pending, setpending] = useState(true);

    useEffect(() => {
        setmovie(null);
        setpending(true);
        setTimeout(() => {
            fetch("http://localhost:4000/movies/"+id)
                .then((res) => { return res.json() })
                .then((data) => {
                    console.log(data);
                    setmovie(data);
                    setpending(false)
                })
                .catch((err) => {
                    console.log(err);
                    seterror("The page you are looking for may have been moved,deleted,or possibily never existed -404")
                    setpending(false)
                })
        }, 2000)
    }, [id])

    let deleteMovie = ()=>{
        fetch("http://localhost:4000/movies/"+id , {method : "DELETE"})
        .then(()=>{navigate("/")})
        
     }

    return (
        <div className='movie-details'>
            <h1 className='bg-slate-400 h-12 text-center p-2 font-bold text-3xl' >Movie Details</h1>
            <hr />
            {pending === true && <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}

            {error && <h1 className='err-line'>{error}</h1>}

            {movie && <div id='movie-dtl-main'>
                <div>
                   <img src={movie.poster} alt="poster" />
                </div>
                <div id='mov-dtl-cont'>
                    <h1>Movie Name :{movie.moviename}</h1>
                    <h2>Hero :{movie.hero}</h2>
                    <h2>Heroein :{movie.heroine}</h2>
                    <h3>Director :{movie.director}</h3>
                    <h4>Genre : {movie.genre}</h4>
                    <h4>Release Date :{movie.releasedate}</h4>
                    <h4>Rating : {movie.rating}</h4>
                    <h4>Language : {movie.languages.join(" , ")}</h4><br /><hr /><br />
                    <h2>Trailer : </h2>
                    <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <button onClick={deleteMovie}>Delete</button>
                   <Link to={`/EditMovieid/${movie.id}`}><button>Update</button></Link> 
                </div>
            </div>
            }
                    {movie && <Revelentmovies genre={movie.genre}/>}
        </div>
    )
}

export default Moviedetails
