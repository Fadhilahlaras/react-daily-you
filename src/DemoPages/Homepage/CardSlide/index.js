import React, {Fragment, Component} from "react";

import Slider from "react-slick";

import bg1 from '../../../assets/utils/images/daily.jpg';
import bg2 from '../../../assets/utils/images/daily.jpg';
import bg3 from '../../../assets/utils/images/daily.jpg';

import {Col, Row, Button, Form, FormGroup, Label, Input, Card, CardBody,
    CardTitle} from 'reactstrap';

export default class CardSlide extends Component {
    render() {
        let settings = {
            dots: true,

            infinite: true,
            speed: 500,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            initialSlide: 0,
            autoplay: true,
            adaptiveHeight: true

        };
        return (

            <Fragment>
                <div className="slider-light">
                    <Slider  {...settings}>
                        <div
                            className="p-5 bg-plum-plate">
                            <div className="slide-img-bg"
                                 style={{
                                     backgroundImage: 'url(' + bg1 + ')'
                                 }}/>
                            <div className="slider-content">
                                <h3>Skin Care</h3>
                            </div>
                        </div>
                        <div
                            className="p-5 bg-premium-dark">
                            <div className="slide-img-bg"
                                 style={{
                                     backgroundImage: 'url(' + bg3 + ')'
                                 }}/>
                            <div className="slider-content">
                                <h3>Make Up</h3>
                            </div>
                        </div>
                        <div
                            className="p-5 bg-sunny-morning">
                            <div className="slide-img-bg opacity-6"
                                 style={{
                                     backgroundImage: 'url(' + bg2 + ')'
                                 }}/>
                            <div className="slider-content">
                                <h3>Body Care</h3>
                            </div>
                        </div>
                    </Slider>
                </div>
            </Fragment>
        );
    }
}
