import React, {Fragment} from 'react';

// import Ionicon from 'react-ionicons';

import { IoIosCalendar } from "react-icons/io";

import PerfectScrollbar from 'react-perfect-scrollbar';

import {
    DropdownToggle, DropdownMenu,
    Nav, Col, Row, Button, NavItem, NavLink,
    UncontrolledTooltip, UncontrolledButtonDropdown
} from 'reactstrap';

import {
    toast,
    Bounce
} from 'react-toastify';


import {
    faAngleDown,

} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import city3 from '../../../assets/utils/images/dropdown-header/city3.jpg';
import avatar1 from '../../../assets/utils/images/avatars/1.jpg';
import {Link} from "react-router-dom";

class UserBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };

    }

    // const logout = (e) => {
    //     localStorage.clear()
    // }


    render() {

        return (
            <Fragment>
                <div className="header-btn-lg pr-0">
                    <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                                <Link to="/pages/login" style={{textDecoration: "none"}}>
                                    <Button className="mb-2 mr-2 btn-icon btn-pill" outline color="primary">
                                        <i className="pe-7s-add-user btn-icon-wrapper"> </i>
                                        Login
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default UserBox;