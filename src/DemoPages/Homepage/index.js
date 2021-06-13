import React,{Fragment} from "react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import AppHeader from "../../Layout/AppHeader/";
import AppFooter from "../../Layout/AppFooter";

import {Row, Col, CardBody} from "reactstrap";

import Carousel from "./Carousel/index";
import bg1 from "../../assets/utils/images/originals/city.jpg";

import CardTeam from "../AboutUs/Team/CardData";

const Homepage = () => {

    return(
        <Fragment>
            <CSSTransitionGroup
                component="div"
                transitionName="TabsAnimation"
                transitionAppear={true}
                transitionAppearTimeout={0}
                transitionEnter={false}
                transitionLeave={false}>
                <AppHeader/>

                <div className="app-main">
                        <div className="app-main__inner">
                            <Row>
                                <Col md="12">
                                    {/*<Card className="main-card mb-5">*/}
                                        <CardBody>
                                            <div
                                                className="p-5 bg-plum-plate">
                                                <div className="slide-img-bg"
                                                     style={{
                                                         fade: true,
                                                         backgroundImage: 'url(' + bg1 + ')'
                                                     }}/>
                                                <div className="slider-content" style={{
                                                    color: "white"
                                                }}>
                                                    <h3>Daily You</h3>
                                                    <p>
                                                        Daily You is like a dream. Some think it's too good to be true! .
                                                    </p>
                                                </div>
                                            </div>
                                        </CardBody>
                                    <CardBody>
                                        <Carousel/>
                                    </CardBody>
                                    <CardBody>
                                        <h3 style={{textAlign: "center"}}> What's New </h3>

                                    </CardBody>
                                    {/*</Card>*/}
                                </Col>
                            </Row>
                        </div>

                    <AppFooter/>
                </div>
            </CSSTransitionGroup>
        </Fragment>
    )
}
export default Homepage;
