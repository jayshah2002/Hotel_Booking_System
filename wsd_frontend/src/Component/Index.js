import React from 'react';
import MenuAppBar from './MenuAppBar';
import DemoCarousel from './Carosuel';
import DemoCard from './Card';
import HotelImage from './hotelimage';
import HotelFaculity from './hotelfaculity';
import Footer from './footer';

// console.log("Index")
function Index() {
    return (
        <div>
          <MenuAppBar/>  
          <DemoCarousel/>
          <HotelImage />
          <HotelFaculity />
         <Footer />
        </div>
    );
}

export default Index;