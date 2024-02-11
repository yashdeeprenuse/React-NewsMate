
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsMain from './components/NewsMain';


export default class App extends Component {
  
  render() {
   
    return ( 
    <>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
       <Route exact path='/' element={<NewsMain key="general" category="general"></NewsMain>}></Route>
        <Route exact path='/business' element={<NewsMain key="business" category="business"></NewsMain>}></Route>
        <Route exact path='/entertainment' element={<NewsMain key="entertainment" category="entertainment"></NewsMain>}></Route>
        <Route exact path='/health' element={<NewsMain key="health" category="health"></NewsMain>}></Route>
        <Route exact path='/science' element={<NewsMain key="science" category="science"></NewsMain>}></Route>
        <Route exact path='/sports' element={<NewsMain key="sports" category="sports"></NewsMain>}></Route>
        <Route exact path='/technology' element={<NewsMain key="technology" category="technology"></NewsMain>}></Route>
        </Routes>
      </BrowserRouter>

      </>
     
    )
  }
}



