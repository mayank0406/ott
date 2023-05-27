import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import Movielist from './Movielist';

function Search() {
  
  let {searchword} = useParams();
  let [movie, setmovie] = useState(null);
  let [error, seterror] = useState(null);
  let [pending, setpending] = useState(true);

  useEffect(() => {
    setmovie(null);
    setpending(null);
      setTimeout(() => {
          fetch("http://localhost:4000/movies")
              .then((res) => { return res.json() })
              .then((data) => {
                console.log(data);
                 let d =  data.filter((m)=>{
                    return (m.moviename.toLowerCase().startsWith(searchword.toLowerCase())) ||
                          (m.genre.toLowerCase()===(searchword.toLowerCase()))  ||
                          (m.languages.includes(searchword))
                        })
                  setmovie(d);
                  setpending(false);
              })
              .catch((err) => {
                  console.log(err);
                  seterror("The page you are looking for may have been moved,deleted,or possibily never existed -404")
                  setpending(false)
              })
      }, 2000)
  }, [searchword])
  return (
    <div>
       {pending === true && <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}

       {error && <h1 className='err-line'>{error}</h1>}

       {movie && <Movielist movies={movie} title="Search Result"/>}
    </div>
  )
}

export default Search
