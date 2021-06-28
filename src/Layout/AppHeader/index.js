import React, {Fragment} from 'react';
import cx from 'classnames';

import {connect} from 'react-redux';

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import HeaderLogo from '../AppLogo';

import SearchBox from './Components/SearchBox';
import MegaMenu from './Components/MegaMenu';
import UserBox from './Components/UserBox';

import HeaderDots from "./Components/HeaderDots";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    // const username = localStorage.getItem("username")
    //
    // const logout = (e) => {
    //     localStorage.clear()
    // }

    render() {
        let {
            headerBackgroundColor,
            enableMobileMenuSmall,
            enableHeaderShadow
        } = this.props;
        return (
            // <Navbar className={`${styles.root} navbar navbar-expand-lg`}>
            //     <Container className="navbar-container">
            //         <Link to="/">
            //             <Navbar.Brand className='font-putih'>
            //                 YFA
            //             </Navbar.Brand>
            //         </Link>
            //         <div className="nav-burger"
            //              onClick={(e) => setSlide(!slide)}>
            //             <div className={`nav-burger-span ${slide? 'silang' : ""}`}>
            //                 <span></span>
            //                 <span></span>
            //                 <span></span>
            //             </div>
            //         </div>
            //         <div navbar className={`navbar-container navbar-mobile ${slide ? 'slide' : ''}`}>
            //             {/* style={collapse?{position: 'absolute'}:{display:"block"}} */}
            //             {/* style={slide?{transform: 'translateX(0)'}:{transform:"translateX(100%)"}} */}
            //             <Navbar.Nav className='font-putih' mr="auto">
            //                 {(() => {
            //                     if (localStorage.getItem("roles") === null) {
            //                         return (
            //                             <Link to="/login">
            //                                 <Nav.Item className="nav-item-center nav-item-background">
            //                                     <div className="flex-center cursor">
            //                                         <FontAwesomeIcon className="icon-center"
            //                                                          icon={faBoxOpen}/>
            //                                         <Nav.Link className='font-putih'>About Us</Nav.Link>
            //                                     </div>
            //                                 </Nav.Item>
            //                             </Link>
            //                         )
            //                     } else {
            //                         return (
            //                             <Link to="/dropoff">
            //                                 <Nav.Item className="nav-item-center nav-item-background">
            //                                     <div className="flex-center cursor">
            //                                         <FontAwesomeIcon className="icon-center"
            //                                                          icon={faBoxOpen}/>
            //                                         <Nav.Link className='font-putih'>About Us</Nav.Link>
            //                                     </div>
            //                                 </Nav.Item>
            //                             </Link>
            //                         )
            //                     }
            //                 })()}
            //                 <Link to="/lacak">
            //                     <Nav.Item className="nav-item-center nav-item-background">
            //                         <div className="flex-center cursor">
            //                             <FontAwesomeIcon className="icon-center"
            //                                              icon={faSearch}/>
            //                             <Nav.Link className='font-putih'>Lacak</Nav.Link>
            //                         </div>
            //                     </Nav.Item>
            //                 </Link>
            //                 <Link to="/layanan">
            //                     <Nav.Item className="nav-item-center nav-item-background">
            //                         <div className="flex-center cursor">
            //                             <FontAwesomeIcon className="icon-center"
            //                                              icon={faShippingFast}/>
            //                             <Nav.Link className='font-putih'>Layanan</Nav.Link>
            //                         </div>
            //                     </Nav.Item>
            //                 </Link>
            //                 <Nav.Item dropdown className="drop-down-menu nav-item-center nav-item-background">
            //                     <div className="flex-center cursor">
            //                         <FontAwesomeIcon className="icon-center"
            //                                          icon={faInfoCircle}/>
            //                         <Nav.Link className='font-putih'>Informasi</Nav.Link>
            //                         <FontAwesomeIcon className="icon-center margin-left-minus chevron-down"
            //                                          icon={faChevronDown}/>
            //                     </div>
            //                     <div className="drop-down-item drop-down-item-open font-putih">
            //                         <Dropdown.Item style={{textAlign: 'center'}}>FAQ</Dropdown.Item>
            //                         <Link to="/informasi/panduan">
            //                             <Dropdown.Item style={{textAlign: 'center'}}>Panduan</Dropdown.Item>
            //                         </Link>
            //                         <Link to="/informasi/larangan">
            //                             <Dropdown.Item style={{textAlign: 'center'}}>Larangan</Dropdown.Item>
            //                         </Link>
            //                     </div>
            //                 </Nav.Item>
            //                 <Link to="/about-us">
            //                     <Nav.Item className="nav-item-center nav-item-background">
            //                         <div className="flex-center cursor">
            //                             <FontAwesomeIcon className="icon-center"
            //                                              icon={faUsers}/>
            //                             <Nav.Link className='font-putih'>About Us</Nav.Link>
            //                         </div>
            //                     </Nav.Item>
            //                 </Link>
            //                 {(() => {
            //                     if (localStorage.getItem("roles") === null) {
            //                         return (
            //                             <div className="user-menu">
            //                                 <Nav.Item dropdown className="drop-down-menu nav-item-center nav-item-background">
            //                                     <div className="flex-center cursor">
            //                                         <FontAwesomeIcon className="icon-center"
            //                                                          icon={faUser}/>
            //                                         <Link to={"/login"}>
            //                                             <Nav.Link className='font-putih'>Login</Nav.Link>
            //                                         </Link>
            //                                     </div>
            //                                 </Nav.Item>
            //                             </div>
            //                         )
            //                     } else if (localStorage.getItem("roles").includes("ROLE_ADMIN")) {
            //                         return (
            //                             <div className="user-menu">
            //                                 <Nav.Item dropdown className="drop-down-menu nav-item-center nav-item-background">
            //                                     <div className="flex-center cursor">
            //                                         <FontAwesomeIcon className="icon-center"
            //                                                          icon={faUser}/>
            //                                         <Nav.Link className='font-putih'>{username}</Nav.Link>
            //                                         <FontAwesomeIcon className="icon-center margin-left-minus chevron-down"
            //                                                          icon={faChevronDown}/>
            //                                     </div>
            //                                     <div className="drop-down-item drop-down-item-open-user font-putih">
            //                                         <Link to="/admin/transaksi">
            //                                             <Dropdown.Item style={{textAlign: 'center'}}>Menu Admin</Dropdown.Item>
            //                                         </Link>
            //                                         <Link to={"/#/home"}>
            //                                             <Dropdown.Item style={{textAlign: 'center'}} onClick={logout}>Logout</Dropdown.Item>
            //                                         </Link>
            //                                     </div>
            //                                 </Nav.Item>
            //                             </div>
            //                         )
            //                     } else if (localStorage.getItem("roles").includes("ROLE_USER")) {
            //                         return (
            //                             <div className="user-menu">
            //                                 <Nav.Item dropdown className="drop-down-menu nav-item-center nav-item-background">
            //                                     <div className="flex-center cursor">
            //                                         <FontAwesomeIcon className="icon-center"
            //                                                          icon={faUser}/>
            //                                         <Nav.Link className='font-putih'>{username}</Nav.Link>
            //                                         <FontAwesomeIcon className="icon-center margin-left-minus chevron-down"
            //                                                          icon={faChevronDown}/>
            //                                     </div>
            //                                     <div className="drop-down-item drop-down-item-open-user font-putih">
            //                                         <Link to="/user/transaksi">
            //                                             <Dropdown.Item style={{textAlign: 'center'}}>Menu Customer</Dropdown.Item>
            //                                         </Link>
            //                                         <Dropdown.Item style={{textAlign: 'center'}} onClick={logout}>Logout</Dropdown.Item>
            //                                     </div>
            //                                 </Nav.Item>
            //                             </div>
            //                         )
            //                     }
            //                 })()}
            //             </Navbar.Nav>
            //         </div>
            //     </Container>
            // </Navbar>

            <Fragment>
                <CSSTransitionGroup
                    component="div"
                    className={cx("app-header", headerBackgroundColor, {'header-shadow': enableHeaderShadow})}
                    transitionName="HeaderAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={1500}
                    transitionEnter={false}
                    transitionLeave={false}>

                    <HeaderLogo/>


                    <div className={cx(
                        "app-header__content",
                        {'header-mobile-open': enableMobileMenuSmall},
                    )}>


                        <div className="app-header-left">
                            <MegaMenu/>
                        </div>

                        <div className="app-header-right">

                            <SearchBox/>
                            <HeaderDots/>
                            <UserBox/>
                        </div>
                    </div>
                </CSSTransitionGroup>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    enableHeaderShadow: state.ThemeOptions.enableHeaderShadow,
    closedSmallerSidebar: state.ThemeOptions.closedSmallerSidebar,
    headerBackgroundColor: state.ThemeOptions.headerBackgroundColor,
    enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);