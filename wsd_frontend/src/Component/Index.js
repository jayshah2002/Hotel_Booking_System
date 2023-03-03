import React from 'react';
import MenuAppBar from './MenuAppBar';
import DemoCarousel from './Carosuel';
import DemoCard from './Card';

// console.log("Index")
function Index() {
    return (
        <div>
          <MenuAppBar/>  
          <DemoCarousel/>
          <div className="container whole">
                <div className="head container">Explore our City...</div><br />
                <div className="row">
                      <DemoCard/>
                </div>
            </div>
        </div>
    );
}

export default Index;