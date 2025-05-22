import React,{useState}from 'react';
import "../styles/taxdeclaration.css";
import { Button, Form, Table } from 'react-bootstrap';
import { MdAdd, MdFilterListAlt, MdSearch } from 'react-icons/md';
import CustomModal from '../ui/CustomModal';

export default function TaxDeclaration() {
    const [showModal,setShowModal] = useState(false);
    return (
        <div className="container">
            {/* Add button */}
            <div className="d-flex justify-content-end">
                <Button variant="primary" className="plus-button" onClick={() => setShowModal(true)}>
                    <MdAdd style={{ fontSize: '24px' }} />
                </Button>
            </div>
            <CustomModal
                show={showModal}
                handleClose={() => setShowModal(false)}
                title="Create project"
            >
                <p>Create the project here.</p>
            </CustomModal>

            {/* Search button */}
            <div className="d-flex justify-content-end">
                <Form className="search-form">
                    <div className="position-relative w-100">
                        <MdSearch
                            className="position-absolute"
                            style={{ fontSize: '20px', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#6c757d' }}
                        />
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="ps-5" // Increase padding to prevent overlap
                            aria-label="Search"
                            style={{ paddingLeft: '35px' }} // Extra padding for more spacing
                        />
                    </div>
                    <Button variant="primary" className="d-flex align-items-center ms-2">
                        <MdFilterListAlt style={{ fontSize: '24px', marginRight: '8px' }} />
                        Filter
                    </Button>
                </Form>
            </div>

            {/* Table */}
            <Table striped bordered hover size="sm">
                <thead className="table-primary">
                    <tr>
                        <th>No</th>
                        <th>Project Name</th>
                        <th>Total Company</th>
                        <th>Conpany Finish</th>
                        <th>Status</th>
                        <th>Other</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>

            {/* pagination */}
            <div className="pagination-container">
                <span>Showing page: 1 of 3</span>
                <div className="ms-3">
                    <Button variant="secondary">←</Button>
                    <Button variant="secondary" className="ms-2">→</Button>
                </div>
            </div>
        </div>
    )
}
