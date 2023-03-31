import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import ForEmployers from './components/pages/ForEmployers';
import Login from './components/pages/Login';
import Matches from './components/pages/Matches';
import SignUp from "./components/pages/Sign-Up";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/for-employers' element={<ForEmployers />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/matches' element={<Matches />} />
                    <Route path='/sign-up' element={<SignUp />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
