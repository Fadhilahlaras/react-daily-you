import React, {Fragment, useState, useEffect} from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import axios from "axios";

import AppHeader from "../../../Layout/AppHeader";
import AppFooter from "../../../Layout/AppFooter";

import CardTeam from "./CardData";

// Examples

import {
    Container,
    Row
} from "reactstrap";

const Team = () => {
    const [dataCard, setDataCard] = useState([])
    let imageArrayPath = [];

    useEffect(() => {
        axios.get("http://localhost:1221/team").then(res => {
            setDataCard(res.data)
        })
    }, [])

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
                                <Row>
                                    {dataCard.map((x, index) => (
                                        <CardTeam key={index} name={x.name} address={x.address} pbirth={x.pbirth}
                                                 bdate={x.bdate} religion={x.religion} gender={x.gender} email={x.email} note={x.note} id={x.id}/>
                                    ))}
                                </Row>

                            </Container>
                        </div>
                        <AppFooter/>
                    </div>
                </CSSTransitionGroup>
            </Fragment>);
}

export default Team;