import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Index from './Index';
import ProfileCreate from './Customers/ProfileCreate';
import ProfileRead from './Customers/ProfileRead';
import ProfileUpdate from './Customers/ProfileUpdate';

// console.log("Routes");
function Home() {
    return (
        <>
            <div className='route'>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/myprofile/create" element={<ProfileCreate/>}/>
                    <Route path="/myprofile/read" element={<ProfileRead/>}/>
                    <Route path="/myprofile/update" element={<ProfileUpdate/>}/>
                </Routes>
            </div>
        </>
    );
}

export default Home;
