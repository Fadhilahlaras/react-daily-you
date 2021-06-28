import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

// USER PAGES

import Login from './Login/';
import Register from './Register/';
import Profile from './UserProfile/';

const UserPages = ({match}) => (
    <Fragment>
        <div className="app-container">

            {/* User Pages */}

            <Route path={`${match.url}/login`} component={Login}/>
            <Route path={`${match.url}/register`} component={Register}/>
            <Route path={`${match.url}/profile`} component={Profile}/>
        </div>
    </Fragment>
);

export default UserPages;