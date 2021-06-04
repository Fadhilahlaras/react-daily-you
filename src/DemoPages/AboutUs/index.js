import React, {Fragment, Component} from "react";

import Slider from "react-slick";

import bg3 from '../../assets/utils/images/originals/citynights.jpg';

import {
    Col,
    Row,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    DropdownToggle,
    UncontrolledDropdown, CardImg, CardBody, CardTitle, CardSubtitle, Card
} from 'reactstrap';
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import AppHeader from "../../Layout/AppHeader";
import AppFooter from "../../Layout/AppFooter";
import {Link} from "react-router-dom";
import {IoIosCart} from "react-icons/io";
import bg2 from "../../assets/utils/images/dropdown-header/city2.jpg";
import avatar5 from "../../assets/utils/images/avatars/5.jpg";
import bg1 from "../../assets/utils/images/dropdown-header/abstract1.jpg";
import avatar3 from "../../assets/utils/images/avatars/4.jpg";
import avatar4 from "../../assets/utils/images/avatars/3.jpg";

export default class AboutUs extends Component {
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
                <CSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <AppHeader/>

                    <div className="app-main">


                        <Row className="h-100">
                            <Row className="h-100 no-gutters">
                                <Col lg="7" md="12"
                                     className="h-100 d-md-flex d-sm-block bg-white justify-content-center align-items-center">
                                    <Col lg="9" md="10" sm="12" className="mx-auto app-login-box">

                                            <h4>
                                                Welcome, to <span className="text-success">Daily You</span> company
                                            </h4>

                                            <div>

                                                <FormText style={{
                                                    textAlign: 'justify',
                                                    color: '#1B3D6C',
                                                    margin: 10,
                                                    paddingBottom: 20,
                                                    fontSize: 18
                                                }}> Daily You is an original Indonesian halal cosmetic brand that was
                                                    founded in 2012. We always provides the best quality product to
                                                    support women to look beautiful at all times according to their
                                                    character. With experience in several industry sectors, a broad
                                                    portfolio and technology platform as well as bringing a dedicated
                                                    and highly qualified team, enabling the talent we provide to provide
                                                    fast and responsive services, making it the best choice for
                                                    companies that want to increase the usability of their businesses
                                                </FormText>
                                            </div>

                                        <div>
                                            <Row>
                                                <Col md="6" lg="4">
                                                    <Card className="mb-3 profile-block">
                                                        <div className="dropdown-menu-header">
                                                            <img src={bg1} alt="" className="profile-blur opacity-10"/>
                                                            <div className="profile-inner bg-warning opacity-5"/>
                                                            <div className="menu-header-content">
                                                                <h5 className="menu-header-title">Visi</h5>
                                                            </div>
                                                        </div>
                                                    </Card>
                                                </Col>
                                                <Col md="6" lg="4">
                                                    <Card className="mb-3 profile-block">
                                                        <div className="dropdown-menu-header">
                                                            <img src={bg2} alt="" className="profile-blur opacity-10"/>
                                                            <div className="profile-inner bg-dark opacity-6"/>
                                                            <div className="menu-header-content">
                                                                <h5 className="menu-header-title">Misi</h5>

                                                            </div>
                                                        </div>
                                                    </Card>
                                                </Col>
                                                <Col md="6" lg="4">
                                                    <Card className="mb-3 profile-block">
                                                        <div className="dropdown-menu-header">
                                                            <img src={bg3} alt="" className="profile-blur opacity-10"/>
                                                            <div className="profile-inner bg-dark opacity-6"/>
                                                            <div className="menu-header-content">
                                                                <h5 className="menu-header-title">Team</h5>

                                                            </div>
                                                        </div>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </div>

                                    </Col>
                                </Col>
                                <Col lg="5" className="d-lg-flex d-xs-none">
                                    <div className="slider-light">
                                        <Slider  {...settings}>
                                            <div
                                                className="h-100 d-flex justify-content-center align-items-center bg-premium-dark">
                                                <div className="slide-img-bg"
                                                     style={{
                                                         backgroundImage: 'url(' + bg3 + ')'
                                                     }}/>
                                                <div className="slider-content">
                                                    <h3>Scalable, Modular, Consistent</h3>
                                                    <p>
                                                        Easily exclude the components you don't require. Lightweight,
                                                        consistent
                                                        Bootstrap based styles across all elements and components
                                                    </p>
                                                </div>
                                            </div>
                                        </Slider>
                                    </div>
                                </Col>
                            </Row>
                        </Row>
                        <AppFooter/>
                    </div>
                </CSSTransitionGroup>
            </Fragment>
        );
    }
}
