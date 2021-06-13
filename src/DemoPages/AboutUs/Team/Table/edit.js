import React, {useEffect, useState} from "react";
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
import axios from "axios";


const EditMember = (props) => {
    const [name, setName] = useState(null)
    const [address, setAddress] = useState(null)
    const [pbirth, setPbirth] = useState(null)
    const [bdate, setBdate] = useState(null)
    const [religion, setReligion] = useState(null)
    const [email, setEmail] = useState(null)
    const [note, setNote] = useState(null)
    const [file, setFile] = useState(null)

    const onSubmit = (e) => {
        const formData = new FormData();
        const json = JSON.stringify({
            "id": props.data.id,
            "name": name == null ? props.data.name : name,
            "address": address == null ? props.data.address : address,
            "pbirth": pbirth == null ? props.data.pbirth : pbirth,
            "bdate": bdate == null ? props.data.bdate : bdate,
            "religion": religion == null ? props.data.religion : religion,
            "email": email == null ? props.data.email : email,
            "note": note == null ? props.data.note : note
        });
        const blobDoc = new Blob([json], {
            type: 'application/json'
        });

        formData.append("file", file)
        formData.append('data', blobDoc)
        const config = {
            headers: {
                'content-type': 'multipart/mixed'
            }
        }
        // axios.post("http://localhost:1221/team/save", formData)
        //     .then(res => console.log(res.data))

        props.onChangeToggle(false)
        console.log(' SAVE >>')
        console.log(file == null ? props.data : file)

    }

    return (
        <>
            <span className="d-inline-block mb-2 mr-2">
                 <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
                        <ModalHeader toggle={props.toggle}>Edit Admin</ModalHeader>
                        <ModalBody>
                            <Form>
                                             <FormGroup>
                                                        <Label>Name : {props.data.name}</Label>
                                                        <Input type="text" name="name" id="name"
                                                               placeholder="Name" value="name" onChange={(e) => {
                                                                   setName(e.target.value)
                                                        }}/>
                                                    </FormGroup>

                                                    <FormGroup>
                                                        <Label>Address : {props.data.address}</Label>
                                                        <Input type="textarea" name="address" id="address"
                                                               placeholder="Address"  onChange={(e) => {
                                                            setAddress(e.target.value)
                                                        }}/>
                                                    </FormGroup>

                                                    <FormGroup>
                                                        <Label>Place of Birth : {props.data.pbirth}</Label>
                                                        <Input type="text" name="pbirth" id="pbirth"
                                                               placeholder="Place of Birth" onChange={(e) => {
                                                            setPbirth(e.target.value)
                                                        }}/>
                                                    </FormGroup>

                                                    <FormGroup>
                                                        <Label>Date of Birth : {props.data.bdate}</Label>
                                                        <Input type="date" name="bdate" id="bdate" onChange={(e) => {
                                                            setBdate(e.target.value)
                                                        }}/>
                                                    </FormGroup>


                                                    <FormGroup>
                                                        <Label for="religion">Religion: {props.data.religion}</Label>
                                                        <Input type="select" name="religion" id="religion" onChange={(e) => {
                                                            setReligion(e.target.value)
                                                        }}>
                                                            <option></option>
                                                            <option>Islam</option>
                                                            <option>Christen</option>
                                                            <option>Chatolic</option>
                                                            <option>Budha</option>
                                                            <option>Hindu</option>
                                                        </Input>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label for="email">Email : {props.data.email}</Label>
                                                        <Input type="email" name="email" id="email"
                                                               placeholder="Input your email" onChange={(e) => {
                                                            setEmail(e.target.value)
                                                        }}/>
                                                    </FormGroup>


                                                    <FormGroup>
                                                        <Label>Note : {props.data.note}</Label>
                                                        <Input type="textarea" name="note" id="note" onChange={(e) => {
                                                            setNote(e.target.value)
                                                        }}/>
                                                    </FormGroup>

                                        </Form>
                            <img src={"data:image/*;base64," + props.file} height={250} width={150}/>
                        </ModalBody>
                        <ModalFooter>
        <Button color="warning" onClick={props.toggle}>Cancel</Button>
                            <Button color="primary" onClick={() => {
                                onSubmit()
                            }}>Save</Button>
                        </ModalFooter>
                    </Modal>
            </span>
        </>
    )
}

export default EditMember;