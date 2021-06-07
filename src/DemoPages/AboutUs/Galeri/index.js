import React, {Fragment, useState, useEffect, Component} from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import axios from "axios";

import AppHeader from "../../../Layout/AppHeader";
import AppFooter from "../../../Layout/AppFooter";


// Examples

import {
    Card, CardTitle,
    Col,
    Container, FormText,
    Row
} from "reactstrap";
import bg1 from "../../../assets/utils/images/dropdown-header/abstract1.jpg";
import bg2 from "../../../assets/utils/images/dropdown-header/abstract2.jpg";
import {Link} from "react-router-dom";
import bg3 from "../../../assets/utils/images/dropdown-header/abstract6.jpg";
import bg4 from "../../../assets/utils/images/dropdown-header/abstract5.jpg";

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
                                    <Col md="4">
                                        <Card body className="card-shadow-primary border mb-3" outline color="primary">
                                            <div
                                                className="h-100 d-flex justify-content-center align-items-center bg-sunny-morning">
                                                <div className="slide-img-bg opacity-6"
                                                     style={{
                                                         backgroundImage: 'url(' + bg2 + ')'
                                                     }}/>
                                            </div>
                                            <CardTitle>Primary Card Shadow</CardTitle>
                                            With supporting text below as a natural lead-in to additional
                                            content.

                                        </Card>
                                        <Card body className="card-shadow-secondary border mb-3" outline color="secondary">
                                            <CardTitle>Secondary Card Shadow</CardTitle>
                                            With supporting text below as a natural lead-in to additional
                                            content.
                                        </Card>
                                    </Col>
                                    <Col md="4">
                                        <Card body className="card-border mb-3" outline color="primary">
                                            <CardTitle>Primary Card Border</CardTitle>
                                            With supporting text below as a natural lead-in to additional
                                            content.
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