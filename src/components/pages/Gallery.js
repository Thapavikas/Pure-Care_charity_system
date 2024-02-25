import React from 'react';
import '../pages/Gallery.css'
import gallery from '../../img/Gallery/Gallery1.webp'
import gallery1 from '../../img/Gallery/Gallery2.webp'
import gallery2 from '../../img/Gallery/Gallery3.webp'

const Gallery = () => {
  return (
    <main>
      <h1>Gallery</h1>
      <div class='Gallery'>
          <div class="responsive">
          <div class="gallery">
            <a target="_blank" href="img_5terre.jpg">
             <img src={gallery}/>
            </a>
            <div class="desc">Add a description of the image here</div>
          </div>
      </div>

      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href="img_forest.jpg">
          <img src={gallery1}/>
          </a>
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href="img_lights.jpg">
          <img src={gallery2}/>
          </a>
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href="img_mountains.jpg">
            {/* <img src="img_mountains.jpg" alt="Mountains"/> */}
          </a>
      </div>

      <div class="clearfix"></div>
    </div>
    </div>
    </main>
  );
};

export default Gallery;
