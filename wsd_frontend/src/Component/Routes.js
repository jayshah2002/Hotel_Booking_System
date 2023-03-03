import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Customerprofile from './Customers/CustomerProfile';
import Index from './Index';

// console.log("Routes");
function Home() {
    return (
        <>
            <div className='route'>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/myprofile" element={<Customerprofile/>}/>
                </Routes>
            </div>
        </>
    );
}

export default Home;
