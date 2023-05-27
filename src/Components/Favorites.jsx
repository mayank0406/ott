import React, { useEffect ,useState} from 'react'
import Movielist from './Movielist';

function Favorites() {

    let[fav , setfav]= useState(null);
    useEffect(()=>{
       setfav(JSON.parse(localStorage.getItem("fav")));
    },[])
  return (
    <div>
      {
        fav &&
        <Movielist movies={fav} title="Favorite Movies"/>
      }
    </div>
  )
}

export default Favorites
