import React from 'react';
import '../pages/Gallery.css'
import gallery from '../../img/Gallery/Gallery1.webp'
import gallery1 from '../../img/Gallery/Gallery2.webp'
import gallery2 from '../../img/Gallery/Gallery3.webp'
import gallery3 from '../../img/Gallery/Gallery4.webp'
import gallery4 from '../../img/Gallery/Gallery5.webp'
import gallery5 from '../../img/Gallery/Gallery6.jpeg'
import gallery6 from '../../img/Gallery/Gallery7.jpeg'
import gallery7 from '../../img/Gallery/Gallery8.jpeg'
import gallery8 from '../../img/Gallery/gallery9.png'

const Gallery = () => {
  return (
    <main>
  <div class="gallery">
        <img src={gallery} alt="Image 1"/>
        <img src={gallery1} alt="Image 2"/>
        <img src={gallery2} alt="Image 3"/>
        <img src={gallery4} alt="Image 4"/>
        <img src={gallery3} alt="Image 5"/>
        <img src={gallery5} alt="Image 6"/>
        <img src={gallery6} alt="Image 7"/>
        <img src={gallery7} alt="Image 8"/>
        <img src={gallery8} alt="Image 9"/>
    </div>

    </main>
  );
};

export default Gallery;
