import React, {  useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

  let [searchword,setsearchword] = useState("");
  let [moviename, setmoviename] = useState([]);
  let [menu ,setmenu] = useState(false);

  useEffect(()=>{
    fetch("http://localhost:4000/movies")
    .then((res)=>{return res.json()})
    .then((data)=>{
      let names = data.map((m)=>{return  {moviename : m.moviename , id : m.id } })
      let filtername = names.filter((movie)=>{return movie.moviename.toLowerCase().includes(searchword.toLowerCase())})
      setmoviename(filtername);
    })
  },[searchword])
  return (
    <nav className='bg-slate-900 w-full h-auto  p-4 flex items-center justify-evenly flex-wrap'  >

      <div id="logo">
       <Link to="/"> <h1 className='text-white text-3xl font-bold'><i class='  bx bx-video'></i> Movies Club </h1> </Link>
      </div>

      <div id="search-bar">
        <input className=' h-8 w-96 rounded-xl mx-4 p-4' type="=search" placeholder='Search for Movies' value={searchword}
        onChange={(e)=>{ setsearchword(e.target.value);}} 
        />
       <Link to={`/search/${searchword}`}><button className='h-8 w-28 m-4 font-bold text-slate-900 rounded-xl bg-white '>Search</button></Link>
      </div>

      <div id="add-movie">
        <Link to="/Favorites"><button className='h-8 w-44  bg-slate-900 font-bold text-white rounded-xl hover:bg-white hover:text-slate-900' > Favorite Movies</button></Link>
      </div>

      <div id="add-movie">
        <Link to="/addmovie" ><button className='h-8 w-44 text-white font-bold  rounded-xl hover:bg-white hover:text-slate-900'> Add Movie</button></Link>
      </div>

      <div className='block md:hidden' id='hamberger-menu'>
          <span>
            <i className='text-white text-3xl bx bx-menu'></i>
            <i className=' text-white text-3xl bx bx-menu-alt-right' ></i>
            
          </span>
          <div id="add-movie">
            <Link to="/Favorites"><button className='h-8 w-44  bg-slate-900 font-bold text-white rounded-xl hover:bg-white hover:text-slate-900' > Favorite Movies</button></Link>
          </div>

          <div id="add-movie">
            <Link to="/addmovie" ><button className='h-8 w-44 text-white font-bold  rounded-xl hover:bg-white hover:text-slate-900'> Add Movie</button></Link>
          </div>

      </div>

      {searchword!=="" && <div className='suggestion-box'>
        <ul>
        {/* { moviename.map((name)=>{return(<li onClick={(e)=>{ setsearchword( e.target.innerText )}}>{name}</li>)}) } */}
        { moviename.map((m)=>{
          return(<Link to={`/moviedetails/${m.id}`}><li onClick={()=>{setsearchword("")}}>{m.moviename}</li></Link>)
          }) }
        </ul>
      
      </div>}
    </nav>
  )
}

export default Navbar
