import React, {useEffect, useState} from 'react'
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const ModalHome = (props) => {

    const [currentUser, setCurrentUser] = useState(null)

    useEffect( () => {

        const user = localStorage.getItem("currentUser");
        setCurrentUser(JSON.parse(user));
    },[])



    return (
        <span className="d-inline-block mb-2 mr-2">
            <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
                <ModalHeader>

                </ModalHeader>
                <ModalBody>
                    <h1 className="text-center mt-4">Information User</h1>
                    {currentUser && (
                        <div className="row">
                            <div className="col-lg-4"></div>
                            <div className="col-lg-4">
                                <div className="card card-body">
                                    <ul>
                                        <li><b>NIK:</b> {currentUser.ktp}</li>
                                        <li><b>Username:</b> {currentUser.userName}</li>
                                        <li><b>Address:</b> {currentUser.alamat}</li>
                                        <li><b>Phone Number:</b> {currentUser.noHp}</li>
                                        <li><b>Email:</b> {currentUser.email}</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </ModalBody>
                <ModalFooter>
                    <Button color="link" onClick={()=> {
                        props.onChangeToggle(false)
                    }}>Close</Button>
                </ModalFooter>
                </Modal>
        </span>
    )

}

export default ModalHome;