import React, {Fragment} from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import axios from "axios";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash, faEdit} from "@fortawesome/free-solid-svg-icons";

import {
    Row, Col,
    Card, CardBody, Button
} from 'reactstrap';

import ReactTable from "react-table";
import EditMember from "./edit";


// const CreateRow = (props) => {
//     return (
//         <tr>
//             <td>{props.title}</td>
//             <td>{props.location}</td>
//         </tr>
//     )
// }

class TableMember extends React.Component {
    constructor() {
        super();
        this.state = {
            dataTable: [],
            modal: false,
            ini: 0
        };
        this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {
        axios.get("http://localhost:1221/team")
            .then(res => {
                this.setState({dataTable: res.data})
                console.log(res)
            })
    }

    toggle(dat){
        this.setState({
            modal: !this.state.modal,
            ini: dat.id,
        });
    }

    hapus = (id) => {
        axios.delete(`http://localhost:1221/team/${id}`).then((response) => {
            // eslint-disable-next-line no-undef
            props.history.push("/team");

        })
    }

    render() {
        return (
            <Fragment>
                <CSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>

                    <Row>
                        <Col md="12">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <ReactTable
                                        data={this.state.dataTable}
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
                                                        Header: "Gender",
                                                        accessor: "gender"
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
                                                                    <Button outLine className="mb-2 mr-2 btn-pill" color="primary" onClick={()=>this.toggle(row.original)} >
                                                                        <FontAwesomeIcon icon={faEdit}/>
                                                                    </Button>
                                                                    <Button outLine className="mb-2 mr-2 btn-pill" color="primary" onClick={()=>this.hapus(row.original.id)}>
                                                                        <FontAwesomeIcon icon={faTrash}/>
                                                                    </Button>                                                                </div>
                                                            )
                                                        }
                                                    ]
                                                }
                                            ]}
                                        defaultPageSize={10}
                                        className="-striped -highlight"
                                    />
                                </CardBody>
                            </Card>
                            <EditMember toggle={this.toggle} modal = {this.state.modal} idPro={this.state.ini}/>
                        </Col>
                    </Row>
                </CSSTransitionGroup>
            </Fragment>
        )
    }
}

export default TableMember;