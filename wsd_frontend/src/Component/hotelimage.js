import React from 'react';

function HotelImage() {
    return (
        <>
             <br/><br/>  <h1 class="text-center text-xl font-medium uppercase mb-4">Hotel Insights</h1>
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
   
    <div class="rounded overflow-hidden shadow-lg">
      <img class="w-full" src="https://upload.wikimedia.org/wikipedia/commons/d/df/Town_and_Country_fh000023.jpg" alt="Mountain"/>
    
    </div>
    
    <div class="rounded overflow-hidden shadow-lg">
      <img class="w-full" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d5/9c/b8/stone-wood-nature-resort.jpg?w=700&h=-1&s=1" alt="River"/>
     
    </div>

    
    <div class="rounded overflow-hidden shadow-lg">
      <img class="w-full" src="https://www.beaches.com/blog/content/images/2021/03/Beaches-Turks-Caicos-Overview.jpg" alt="Forest"/>
     
    </div>
  </div>
</>

    );
}

export default HotelImage;