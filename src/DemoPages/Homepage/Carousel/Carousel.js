import React, {} from 'react';
import {
    UncontrolledCarousel
} from 'reactstrap';
 import image1 from '../../../assets/utils/images/dropdown-header/abstract1.jpg';
 import image2 from '../../../assets/utils/images/1596721530.jpg';
 import image3 from '../../../assets/utils/images/dropdown-header/abstract3.jpg';
 
const items = [
    {
        id: 1,
        src: image1,
        altText: 'Make Up',
        caption: 'Make Up'
    },
    {
        id: 2,
        src: image2,
        altText: 'Skin Care',
        caption: 'Skin Care'
    },
    {
        id: 3,
        src: image3,
        altText: 'Body Care',
        caption: 'Body Care'
    }
];

const CarouselDefault = () => <UncontrolledCarousel items={items}/>;


export default CarouselDefault;
