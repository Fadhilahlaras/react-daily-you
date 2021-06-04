import React,{Fragment} from "react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import AppHeader from "../../Layout/AppHeader/";
import AppFooter from "../../Layout/AppFooter";

import {Row, Container, Col} from "reactstrap";

// import CardNya from "./CardIsi";
import CardSlide from "./CardSlide";
import axios from "axios";

const Homepage = () => {

    // const [Index, setDataCard] = useState([])
    // let imageArrayPath = [];

    //melakukan efek samping (side effects) didalam function component
    // useEffect(() => {
    //     axios.get("http://localhost:1221/input").then(res => {
    //         setDataCard(res.data)
    //     })
    // }, [])

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
                            {/*<Row>*/}
                                <CardSlide />

                            {/*</Row>*/}
                            {/*<Row>*/}
                            {/*    {Index.map((x, index) => (*/}
                            {/*        <CardNya key={index} firstname={x.firstname} lastname={x.lastname} image={x.image} date={x.date} address={x.address} id={x.id}/>*/}
                            {/*    ))}*/}
                            {/*</Row>*/}
                        </div>

                    <AppFooter/>
                </div>
            </CSSTransitionGroup>
        </Fragment>
    )
}
export default Homepage;
