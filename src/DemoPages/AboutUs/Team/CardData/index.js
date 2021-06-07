import React, {Fragment, useState, useEffect} from "react";
import {
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardTitle,
    Col,
    CardFooter
} from "reactstrap";
import axios from "axios";

const CardTeam = (props) => {

    const [image, setImage] = useState("")


    useEffect(() => {
            axios.get("http://localhost:1221/team/getImage/" + props.id).then(res => {
                setImage(res.data)
                //console.log(imageArrayPath[index])
            })
        }
    )

    return (
        <Fragment>
            <Col md="4">
                <Card className="main-card mb-3">
                    <CardImg top width="25%"
                             src={"data:image/*;base64," + image}
                             alt="Card image cap"/>
                    <CardBody>
                        <CardTitle>{props.name}</CardTitle>
                        <CardSubtitle>{props.pbirth},{props.bdate}</CardSubtitle>
                        <CardSubtitle>{props.email}</CardSubtitle>
                    </CardBody>

                    <CardFooter>
                        <div className="align-content-center">
                            <p>{props.note}</p>
                        </div>
                    </CardFooter>

                </Card>
            </Col>
        </Fragment>
    )
}

export default CardTeam;