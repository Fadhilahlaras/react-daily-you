import React,{Fragment} from "react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import {Row, Container, Col} from "reactstrap";

import CardNya from "./CardIsi";
import Index from "./CardData";
import CardSlide from "./CardSlide";

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
                                <CardSlide />
                                <p> </p>
                            </Row>
                            <Row>
                                {Index.map((x, index) => (
                                    <CardNya key={index} title={x.title} subtitle={x.subtitle} image={x.image}/>
                                ))}
                            </Row>
                        </div>

                </div>
            </CSSTransitionGroup>
        </Fragment>
    )
}
export default Homepage;
