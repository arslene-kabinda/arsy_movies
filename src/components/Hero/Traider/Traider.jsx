import React from 'react'
import image from '../../../assets/wwm.jpg'
import {TraiderStyle} from './TraiderStyle'
import Carousel, {Item} from 'react-elastic-carousel'


const Traider = () => {
    return (
        <div class="container">
    
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
   
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    
    <div class="carousel-inner" data-interval="2000">
      <div class="item active">
        <img src={image} alt="Los Angeles" />
      </div>

      <div class="item">
        <img src={image} alt="Chicago" />
      </div>
    
      <div class="item">
        <img src={image}alt="New york" />
      </div>
    </div>

    
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>

    )
}

export default Traider


