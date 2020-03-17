import React from 'react';
import './../../App.css'
import { UncontrolledCarousel } from 'reactstrap';
import {Wrapper} from './../../GlobalStyles/styles';

const items = [
  {
    src: require('./../../Assets/Carousel/albany-capture-al0zEJCP-cc-unsplash.jpg'),
    altText: 'Slide 1',
    // caption: 'Slide 1',
    // header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: require('./../../Assets/Carousel/cornelia-ng-hxtKsjWSd3M-unsplash.jpg'),
    altText: 'Slide 2',
    // caption: 'Slide 2',
    // header: 'Slide 2 Header',
    key: '2'
  },
  // {
  //   src: require('./../../Assets/Carousel/laurissi-4RkSsYzxTps-unsplash.jpg'),
  //   altText: 'Slide 3',
  //   // caption: 'Slide 3',
  //   // header: 'Slide 3 Header',
  //   key: '3'
  // }
];

const Carousel = () => {
  return(
      <Wrapper carousel>
        <UncontrolledCarousel items={items}  className='carousel'/>
    </Wrapper>
  )
};

export default Carousel;