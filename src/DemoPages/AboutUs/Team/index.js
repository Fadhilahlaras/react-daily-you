import React, {useEffect, useState} from "react";
import {
    Button,
    Card,
    CardBody,
    CardTitle, Col,
    Form,
    FormGroup, FormText, Input, Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader, Row
} from "reactstrap";


const ModalTeam = (props) => {

    // useEffect(() => {
    //     getOptions()
    // })

    return (
        <span className="d-inline-block mb-2 mr-2">
            <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
                <ModalHeader toggle={props.toggle}>Misi Daily You</ModalHeader>
                <ModalBody>
                </ModalBody>
                <ModalFooter>
                    <Button color="link" onClick={props.toggle}>Close</Button>
                </ModalFooter>
                </Modal>
        </span>
    )

}

export default ModalTeam;