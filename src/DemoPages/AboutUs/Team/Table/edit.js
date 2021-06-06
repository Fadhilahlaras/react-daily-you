import React from "react";
import {
    Button,
    CustomInput, Form,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Table
} from "reactstrap";
import {IoIosCart, IoIosSettings} from "react-icons/io";


const EditMember = (props) => {
    return (
        <>
            <span className="d-inline-block mb-2 mr-2">
                 <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
                        <ModalHeader toggle={props.toggle}><IoIosSettings size={20}/>Edit Admin</ModalHeader>
                        <ModalBody>
                            <Form>
                                             <FormGroup>
                                                        <Label>Name</Label>
                                                        <Input type="text" name="name" id="name"
                                                               placeholder="Name"/>
                                                    </FormGroup>

                                                    <FormGroup>
                                                        <Label>Address</Label>
                                                        <Input type="textarea" name="address" id="address"
                                                               placeholder="Address" />
                                                    </FormGroup>

                                                    <FormGroup>
                                                        <Label>Place of Birth</Label>
                                                        <Input type="text" name="pbirth" id="pbirth"
                                                               placeholder="Place of Birth"
                                                               />
                                                    </FormGroup>

                                                    <FormGroup>
                                                        <Label>Date of Birth</Label>
                                                        <Input type="date" name="bdate" id="bdate"/>
                                                    </FormGroup>


                                                    <FormGroup  >
                                                        <label for="gender">Gender</label>
                                                        <FormGroup check>
                                                            <Label check>
                                                                <Input type="radio" name="radio1"/>{' '}
                                                                Male
                                                            </Label>
                                                        </FormGroup>
                                                        <FormGroup check>
                                                            <Label check>
                                                                <Input type="radio" name="radio1"/>{' '}
                                                                Female
                                                            </Label>
                                                        </FormGroup>
                                                    </FormGroup>

                                                    <FormGroup>
                                                        <Label for="religion">Religion</Label>
                                                        <Input type="select" name="religion" id="religion" >
                                                            <option></option>
                                                            <option>Islam</option>
                                                            <option>Christen</option>
                                                            <option>Chatolic</option>
                                                            <option>Budha</option>
                                                            <option>Hindu</option>
                                                        </Input>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label for="email">Email</Label>
                                                        <Input type="email" name="email" id="email"
                                                               placeholder="Input your email" />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label>Upload your photo</Label>
                                                        <Input type="file" name="file" id="file"
                                                               />
                                                    </FormGroup>

                                                    <FormGroup>
                                                        <Label>Note</Label>
                                                        <Input type="textarea" name="note" id="note" />
                                                    </FormGroup>
                                <Button color="primary" className="mt-1">Submit</Button>
                                        </Form>
                        </ModalBody>
                        <ModalFooter>
        <Button color="link" onClick={props.toggle}>Cancel</Button>
                            <Button color="primary" onClick={props.toggle}>Save</Button>
                        </ModalFooter>
                    </Modal>
            </span>
        </>
    )
}

export default EditMember;