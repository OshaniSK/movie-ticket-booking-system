import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SeatLayout from './pages/SeatLayout';
import MyBookings from './pages/MyBookings';
import Favorite from './pages/Favorite';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import { Routes, Route } from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
     <Toaster/>
     <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>} />
      <Route path='/movies' element={<Movies/>} />
      <Route path='/movies/:id' element={<MovieDetails/>} />
      <Route path='/movies/:id/:date' element={<SeatLayout/>} />
      <Route path='/my-bookings' element={<MyBookings/>} />
      <Route path='/favorite' element={<Favorite/>} />

    </Routes>
    <Footer/>

    </>
  );
}

export default App;
