import React, {Fragment, useEffect, useState} from "react";

import {Route} from "react-router-dom";
import Dashboard from "./Dashboard";

import AppHeader from "../../Layout/AppHeader/index";


const Homepage = ({ match }) => (

    <Fragment>
        <AppHeader/>

        <div className="app-main">

            <div className="app-main__inner">


                {(() => {
                    // if (localStorage.getItem('role') === 'ROLE_USER') {
                    return (<>
                        <Route path={`${match.url}/dashboard`} component={Dashboard} />
                    </>);
                    // } else {
                    //     return <h1>Access denied!!</h1>;
                    // }
                })()}
            </div>
        </div>
    </Fragment>
);

export default Homepage;
