import React, {Fragment, useEffect, useState} from "react";

import {Route} from "react-router-dom";

import CompanyProfile from "./CompanyProfile";
import Team from "./Team";
import TableMember from "./Team/Table";

import AppHeader from "../../Layout/AppHeader";

const About = ({ match }) => (

    <Fragment>
        <AppHeader/>

        <div className="app-main">

            <div className="app-main__inner">

                {(() => {
                    // if (localStorage.getItem('role') === 'ROLE_USER') {
                    return (<>
                        <Route path={`${match.url}/company`} component={CompanyProfile} />
                        <Route path={`${match.url}/team`} component={Team} />
                        <Route path={`${match.url}/tableMember`} component={TableMember} />
                    </>);
                    // } else {
                    //     return <h1>Access denied!!</h1>;
                    // }
                })()}
            </div>
        </div>
    </Fragment>
);

export default About;