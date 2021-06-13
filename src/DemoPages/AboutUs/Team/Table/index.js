import React, {Fragment, useEffect, useState} from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import axios from "axios";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash, faEdit, faFilePdf, faFileExcel} from "@fortawesome/free-solid-svg-icons";
import AppHeader from "../../../../Layout/AppHeader";
import AppFooter from "../../../../Layout/AppFooter";

import {
    Row, Col,
    Card, CardBody, Button, CardTitle, Container
} from 'reactstrap';

import ReactTable from "react-table";
import EditMember from "./edit";
import bg1 from "../../../../assets/utils/images/originals/city.jpg";


// const CreateRow = (props) => {
//     return (
//         <tr>
//             <td>{props.title}</td>
//             <td>{props.location}</td>
//         </tr>
//     )
// }

const TableMember = () => {
    const [dataTable, setDataTable] = useState([])
    const [modalEdit, setModalEdit] = useState(false)
    const [del, setDel] = useState(0)
    const [dataa, setDataa] = useState({})
    const [file, setFile] = useState("")



    useEffect(() => {
        axios.get("http://localhost:1221/team")
            .then(res => {
                setDataTable(res.data)
            }).catch();
    }, [del])

    const toggleEdit = (val) => {
        setModalEdit(!modalEdit)
        console.log('toggle edit oke', val)
        axios.get('http://localhost:1221/team/' + val).then(res => {
            setDataa(res.data)
        })
        axios.get("http://localhost:1221/team/getImage/" + val).then(res => {
            setFile(res.data)
        }).catch()
    }

    const deleteData = (id) => {
        axios.delete('http://localhost:1221/team/' + id).then().catch(err => console.log(err))
        setDel(id)
    }

    const onChangeToggleEdit = () => {
        setModalEdit(!modalEdit)
    }

    return (
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
                        <Container fluid>
                            <Row>
                                <Col md="12">
                                    <Card>
                                        <CardBody>
                                            <div
                                                className="p-5 bg-plum-plate">
                                                <div className="slide-img-bg"
                                                     style={{
                                                         fade: true,
                                                         backgroundImage: 'url(' + bg1 + ')',
                                                         color: "white", textAlign: "center"
                                                     }}/>
                                                <div className="slider-content" style={{
                                                    color: "white", textAlign: "center"
                                                }}>
                                                    <h3>Team Member</h3>
                                                </div>
                                            </div>


                                        </CardBody>
                                    </Card>

                                </Col>

                            </Row>
                            <Row>
                                <Col md="12">
                                    <Card className="main-card mb-3">
                                        <CardBody>
                                            <ReactTable
                                                data={dataTable}
                                                filterable
                                                columns=
                                                    {[{
                                                        columns: [
                                                            {
                                                                Header: "Name",
                                                                accessor: "name"
                                                            },
                                                            {
                                                                Header: "Address",
                                                                accessor: "address"
                                                            },
                                                            {
                                                                Header: "Place of Birth",
                                                                accessor: "pbirth"
                                                            },
                                                            {
                                                                Header: "Date of Birth",
                                                                accessor: "bdate"
                                                            },
                                                            {
                                                                Header: "Religion",
                                                                accessor: "religion"
                                                            },
                                                            {
                                                                Header: "Email",
                                                                accessor: "email"
                                                            },
                                                            {
                                                                Header: "Note",
                                                                accessor: "note"
                                                            }
                                                        ]
                                                    },
                                                        {
                                                            columns: [
                                                                {
                                                                    Header: "Action",
                                                                    accessor: "action",
                                                                    filterable: false,
                                                                    Cell: row => (
                                                                        <div className="d-block w-100 text-center">
                                                                            <Button outLine
                                                                                    className="mb-2 mr-2 btn-pill"
                                                                                    color="primary"
                                                                                    onClick={(e) => {
                                                                                        toggleEdit(row.original.id)
                                                                                    }}>
                                                                                <FontAwesomeIcon icon={faEdit}/>
                                                                            </Button>
                                                                            <Button outLine
                                                                                    className="mb-2 mr-2 btn-pill"
                                                                                    color="primary"
                                                                                    onClick={(e) => {
                                                                                        deleteData(row.original.id)
                                                                                    }}>
                                                                                <FontAwesomeIcon icon={faTrash}/>
                                                                            </Button></div>
                                                                    )
                                                                }
                                                            ]
                                                        }
                                                    ]}
                                                defaultPageSize={10}
                                                className="-striped -highlight"
                                            />

                                            {/*<CardTitle style={{fontSize: "18px"}}><br/>Download the report of all*/}
                                            {/*    products uploaded:<br/></CardTitle>*/}

                                            {/*<br/>*/}
                                            {/*<Button type="button" className="mt-1" color="danger"*/}
                                            {/*        onClick={this.getPDF} style={{fontSize: "20px", margin: "5px"}}>*/}
                                            {/*    <FontAwesomeIcon icon={faFilePdf}/> <span*/}
                                            {/*    style={{fontSize: "15px"}}>PDF</span>*/}
                                            {/*</Button>*/}
                                            {/*<Button type="button" className="mt-1" color="success"*/}
                                            {/*        onClick={this.getEXCEL}*/}
                                            {/*        style={{fontSize: "20px", margin: "5px"}}>*/}
                                            {/*    <FontAwesomeIcon icon={faFileExcel}/> <span*/}
                                            {/*    style={{fontSize: "15px"}}>EXCEL</span>*/}
                                            {/*</Button>*/}

                                        </CardBody>
                                    </Card>
                                    <EditMember toggle={() => {
                                        toggleEdit()
                                    }} modal={modalEdit} data={dataa} file={file} onChangeToggle={onChangeToggleEdit}/>
                                    {/*<AddProduct toggle={() => {*/}
                                    {/*    toggleAdd()*/}
                                    {/*}} modal={modalAdd} onChangeToggle={onChangeToggleAdd}/>                                    </Col>*/}
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <AppFooter/>
                </div>
            </CSSTransitionGroup>
        </Fragment>
    )
}

export default TableMember;