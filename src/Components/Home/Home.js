import React from 'react';
import Profile from './Profile';
import HmFooter from './HmFooter/HmFooter';
import './Home.css';
import Navbar from '../Navbar/Navbar';


const Home = () => {
    return (
        <div className="home-container pt-5 pb-3">
        <Navbar></Navbar>
        
        <Profile></Profile>
        
            
        </div>
    );
};

export default Home;