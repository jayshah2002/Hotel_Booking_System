import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Index from './Index';
import ProfileCreate from './Customers/Register';
import ProfileRead from './Customers/ProfileRead';
import ProfileUpdate from './Customers/ProfileUpdate';
import BookingCreate from './Booking/BookingCreate';
import BookingRead from './Booking/BookingRead';
import BookingUpdate from './Booking/BookingUpdate';
import Login from './Login/Login';

// console.log("Routes");
function Home() {
    return (
        <>
            <div className='route'>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/register" element={<ProfileCreate/>}/>
                    <Route path="/myprofile/read" element={<ProfileRead/>}/>
                    <Route path="/myprofile/update" element={<ProfileUpdate/>}/>
                    <Route path="/book/create" element={<BookingCreate/>}/>
                    <Route path="/book/read" element={<BookingRead/>}/>
                    <Route path="/book/update" element={<BookingUpdate/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </div>
        </>
    );
}

export default Home;
