import React, {Fragment, useState} from 'react';

// import Ionicon from 'react-ionicons';
import {IoIosGrid, IoIosNotificationsOutline, IoIosAnalytics, IoIosCart} from "react-icons/io";

import {
    UncontrolledDropdown, DropdownToggle, DropdownMenu,
    Nav, Col, Row, Button, NavItem, DropdownItem, CardBody, UncontrolledButtonDropdown, Card
} from 'reactstrap';

import {
    AreaChart, Area,
    ResponsiveContainer,
} from 'recharts';

import {
    faArrowLeft,
    faCog,
} from '@fortawesome/free-solid-svg-icons';

import CountUp from 'react-countup';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import bg4 from '../../../assets/utils/images/dropdown-header/abstract4.jpg';
import city2 from '../../../assets/utils/images/dropdown-header/city2.jpg';
import city3 from '../../../assets/utils/images/dropdown-header/city3.jpg';

import Flag from 'react-flagkit';

import Tabs from 'react-responsive-tabs';

// Dropdown Tabs Content
import ChatExample from './TabsContent/ChatExample';
import TimelineEx from './TabsContent/TimelineExample';
import SysErrEx from './TabsContent/SystemExample';
// import ReactTable from "react-table";
// import avatar2 from "../../../assets/utils/images/avatars/4.jpg";
// import {Link} from "react-router-dom";
import CartModal from "./CartModal";

import {Link} from "react-router-dom";

const data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
    {name: 'Page C', uv: 2000, pv: 6800, amt: 2290},
    {name: 'Page D', uv: 4780, pv: 7908, amt: 2000},
    {name: 'Page E', uv: 2890, pv: 9800, amt: 2181},
    {name: 'Page F', uv: 1390, pv: 3800, amt: 1500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

const tabsContent = [
    {
        title: 'Messages',
        content: <ChatExample/>
    },
    {
        title: 'Events',
        content: <TimelineEx/>
    },
    {
        title: 'System Errors',
        content: <SysErrEx/>
    },
];

function getTabs() {
    return tabsContent.map((tab, index) => ({
        title: tab.title,
        getContent: () => tab.content,
        key: index,
    }));
}

const HeaderDots = () => {
    const [modal, setModal] = useState()
// class HeaderDots extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             active: false,
//         };
//
//     }


    // render() {
        return (
            <Fragment>
                <div className="header-dots">

                    <UncontrolledDropdown>
                        {/*<Link to="/cart" style={{textDecoration:"none"}}>*/}
                        <DropdownToggle className="p-0" color="link">
                            {(() => {
                                if (localStorage.getItem("roles") === null) {
                                    return (
                                        <Link to="/pages/login">
                                        <div className="icon-wrapper icon-wrapper-alt rounded-circle" >
                                            <div className="icon-wrapper-bg bg-success"/>
                                            <IoIosCart color="#3ac47d" fontSize="23px"/>
                                        </div>
                                        </Link>
                                    )
                                } else {
                                    return (
                                        <div className="icon-wrapper icon-wrapper-alt rounded-circle" onClick={() => {
                                            setModal(!modal)
                                        }}>
                                            <div className="icon-wrapper-bg bg-success"/>
                                            <IoIosCart color="#3ac47d" fontSize="23px"/>
                                        </div>
                                    )
                                }
                            })()}
                        </DropdownToggle>
                        {/*</Link>*/}
                    </UncontrolledDropdown>
                    <CartModal toggle={() => {setModal(!modal)}} modal={modal} toggleChange={() => {setModal(false)}}/>
                </div>
            </Fragment>
        )
    // }
}

export default HeaderDots