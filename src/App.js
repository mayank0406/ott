import React from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Addmovie from './Components/Addmovie'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Moviedetails from './Components/Moviedetails'
import Favorites from './Components/Favorites'
import Search from './Components/Search'
import Footer from './Components/Footer'
// import EditMovie from './Components/EditMovie'


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/addmovie' element={<Addmovie/>}/>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/Moviedetails/:id' element={<Moviedetails/>}/>
                    <Route path='/Favorites' element={<Favorites/>}/>
                    <Route path="/search/:searchword" element={<Search/>}/>
                    {/* <Route path='/EditMovieid/:id' element={<EditMovie/>}/> */}
                </Routes>
                <Footer/>
            </BrowserRouter>

        </div>
    )
}
export default App
