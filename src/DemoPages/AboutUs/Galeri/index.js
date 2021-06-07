import React, {Fragment, useState, useEffect, Component} from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import axios from "axios";

import AppHeader from "../../../Layout/AppHeader";
import AppFooter from "../../../Layout/AppFooter";


// Examples

import {
    Card, CardTitle, CardFooter, Button,
    Col,
    Container, FormText,
    Row
} from "reactstrap";
import prodemy1 from "../../../assets/utils/images/prodemy/prodemy4_1.jpg";
import prodemy2 from "../../../assets/utils/images/prodemy/prodemy4_2.jpg";
import prodemy3 from "../../../assets/utils/images/prodemy/prodemy4_3.jpg";
import prodemy4 from "../../../assets/utils/images/prodemy/prodemy4_4.jpg";
import prodemy5 from "../../../assets/utils/images/prodemy/prodemy4_5.jpg";
import prodemy6 from "../../../assets/utils/images/prodemy/prodemy4_6.jpg";
import prodemy7 from "../../../assets/utils/images/prodemy/prodemy4_7.jpg";
import prodemy8 from "../../../assets/utils/images/prodemy/prodemy4_8.jpg";
import prodemy9 from "../../../assets/utils/images/prodemy/prodemy4_9.jpg";
import prodemy10 from "../../../assets/utils/images/prodemy/prodemy4_10.jpg";


import {Link} from "react-router-dom";


class Galeri extends Component {

    constructor() {
        super();
        this.state = {
            clicked: false
        };
        this.imageClick = this.imageClick.bind(this);
    }


    imageClick() {
        this.setState({
            clicked: true,
        });
    }

    render() {
        const imageClick = () => {
            console.log('This is Click');
        }
        return (
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
                            <Container fluid>
                                <h4 style={{paddingBottom: 20}}> Galeri </h4>
                                <Row>
                                    <Col sm="12" md="6" xl="4">
                                        <Card className="card-shadow-primary card-border text-white mb-3"
                                              color="primary">
                                            <img src={prodemy1}/>
                                            <CardFooter className="text-center d-block">
                                                <h6 color="dark">Send Message</h6>
                                            </CardFooter>
                                        </Card>
                                    </Col>
                                    <Col sm="12" md="6" xl="4">
                                        <Card className="card-shadow-primary card-border text-white mb-3" color="focus">
                                            <img src={prodemy2}/>
                                            <CardFooter className="text-center d-block">
                                                <h6 color="dark">Send Message</h6>
                                            </CardFooter>
                                        </Card>
                                    </Col>
                                    <Col sm="12" md="12" xl="4">
                                        <Card className="card-shadow-primary card-border text-white mb-3" color="dark">
                                            <img src={prodemy3}/>
                                            <CardFooter className="text-center d-block">
                                                <h6 color="dark">Send Message</h6>
                                            </CardFooter>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm="12" md="6" xl="4">
                                        <Card className="card-shadow-primary card-border text-white mb-3"
                                              color="primary">
                                            <img src={prodemy1}/>
                                            <CardFooter className="text-center d-block">
                                                <h6 color="dark">Send Message</h6>
                                            </CardFooter>
                                        </Card>
                                    </Col>
                                    <Col sm="12" md="6" xl="4">
                                        <Card className="card-shadow-primary card-border text-white mb-3" color="focus">
                                            <img src={prodemy2}/>
                                            <CardFooter className="text-center d-block">
                                                <h6 color="dark">Send Message</h6>
                                            </CardFooter>
                                        </Card>
                                    </Col>
                                    <Col sm="12" md="12" xl="4">
                                        <Card className="card-shadow-primary card-border text-white mb-3" color="dark">
                                            <img src={prodemy3}/>
                                            <CardFooter className="text-center d-block">
                                                <h6 color="dark">Send Message</h6>
                                            </CardFooter>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm="12" md="6" xl="4">
                                        <Card className="card-shadow-primary card-border text-white mb-3"
                                              color="primary">
                                            <img src={prodemy1}/>
                                            <CardFooter className="text-center d-block">
                                                <h6 color="dark">Send Message</h6>
                                            </CardFooter>
                                        </Card>
                                    </Col>
                                    <Col sm="12" md="6" xl="4">
                                        <Card className="card-shadow-primary card-border text-white mb-3" color="focus">
                                            <img src={prodemy2}/>
                                            <CardFooter className="text-center d-block">
                                                <h6 color="dark">Send Message</h6>
                                            </CardFooter>
                                        </Card>
                                    </Col>
                                    <Col sm="12" md="12" xl="4">
                                        <Card className="card-shadow-primary card-border text-white mb-3" color="dark">
                                            <img src={prodemy3}/>
                                            <CardFooter className="text-center d-block">
                                                <h6 color="dark">Send Message</h6>
                                            </CardFooter>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <AppFooter/>
                    </div>
                </CSSTransitionGroup>
            </Fragment>
        )
    }
}

export default Galeri;