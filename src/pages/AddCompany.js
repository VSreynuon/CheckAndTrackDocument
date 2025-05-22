import React, { useEffect, useState } from 'react'
import { MdAdd, MdFilterListAlt, MdSearch } from 'react-icons/md';
import { Button, Dropdown, Form, Modal, Table } from 'react-bootstrap';
import { IoClose } from 'react-icons/io5';
import { IoMdDownload } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';


export default function AddCompany() {
    const [showModalCompany, setShowModalCompany] = useState(false);
    const handleClose = () => setShowModalCompany(false);
    const [companies, setCompanies] = useState([]);
    const [setPullDataLastMonth, setSetPullDataLastMonth] = useState(false);
    const [selectedTaxPayment, setSelectedTaxPayment] = useState(null);
    const [filterTaxPayment, setFilterTaxPayment] = useState([]);
    const navigate = useNavigate();

    const [newCompany, setCompany] = useState({
        vatin: "",
        name: "",
        taxId: "",
        phone: "",
        taxPayment: "pending"
    })

    // handle pull data

    const handlePullData = () => {
        console.log("Pulling data from last month...");
    }

    // Fetch companies from JSON Server
    useEffect(() => {
        fetchCompanies();
        console.log("Fetched Companies:", companies);
    }, []);

    const fetchCompanies = async () => {
        try {
            const response = await fetch("http://localhost:5000/companies");
            const data = await response.json();
            setCompanies(data);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    }

    // Handle input change
    const handleChange = (e) => {
        setCompany({ ...newCompany, [e.target.name]: e.target.value });
    }

    // Submit form and add data to json server
    const handleSubmit = async () => {
        try {
            await fetch("http://localhost:5000/companies", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newCompany)
            });

            alert("Save change successfullt!");
            setShowModalCompany(false);
            fetchCompanies(); //refresh data
        } catch (error) {
            console.error("Error saving data:", error);
        };

    }


    const toggleFOB = (index) => {
        const updateCompanies = [...companies];
        updateCompanies[index].fob = !updateCompanies[index].fob;
        setCompanies(updateCompanies);
    }

    const toggleCMT = (index) => {
        const updateCompanies = [...companies];
        updateCompanies[index].cmt = !updateCompanies[index].cmt;
        setCompanies(updateCompanies);
    }


    const handleTaxFilter = (value) => {
        setFilterTaxPayment = (value);
    };

    const updateTaxPayment = (index) => {
        if (!selectedTaxPayment) return; // Prevent empty selection

        const updatedCompanies = [...companies];
        updatedCompanies[index].taxPayment = selectedTaxPayment;
        setCompanies(updatedCompanies);
    };


    return (
        <div className="container">

            {/* Add new button */}
            <div className="d-flex ">
                <Button variant="primary" className="plus-button" onClick={() => setShowModalCompany(true)}>
                    <MdAdd style={{ fontSize: '24px' }} />
                    Add new
                </Button>

                <Button variant="primary" className="plus-button ms-3" onClick={() => {
                    setPullDataLastMonth(true);
                    navigate('/PullDataLastMonth'); // Change to the correct route
                }}>
                    <IoMdDownload style={{ fontSize: '24px' }} />
                    Pull data from last month
                </Button>
            </div>
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
            <Table striped bordered hover size="sm" >
                <thead className="table-primary">
                    <tr className="short-row">
                        <th>No</th>
                        <th>Project VATIN</th>
                        <th>Company Name</th>
                        <th>Conpany Tax-ID Card No</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>FOB</th>
                        <th>CMT</th>
                        <th>
                            <Dropdown.Toggle variant="table-primary" id="dropdown-basic" style={{ fontSize: "18px", padding: "4px 8px", fontWeight: "bold", textAlign: "center" }}>
                                Tax Payment
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {companies.length > 0 ? (
                        companies
                            .filter(company => filterTaxPayment === "" || company.taxPayment === filterTaxPayment)
                            .map((company, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{company.vatin}</td>
                                    <td>{company.name}</td>
                                    <td>{company.taxId}</td>
                                    <td>{company.phone && company.phone.trim() !== "" ? company.phone : "N/A"}</td>
                                    <td>{company.email}</td>
                                    <td><input type="checkbox" checked={company.fob} onChange={() => toggleFOB(index)} /></td>
                                    <td><input type="checkbox" checked={company.cmt} onChange={() => toggleCMT(index)} /></td>
                                    <td onClick={() => updateTaxPayment(index)} style={{ textAlign: "center", whiteSpace: "nowrap", overflow: "hidden", }}>
                                        {company.taxPayment}
                                    </td>
                                </tr>
                            ))
                    ) :
                        <tr>
                            <td colSpan="10" className="text-center">Don't have Data </td>
                        </tr>}
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
            {/* Modal  add new*/}
            {showModalCompany && (
                <Modal show={showModalCompany} onHide={() => setShowModalCompany(false)} centered>
                    <Modal.Header className="bg-primary text-white">
                        <Modal.Title >Add  Company</Modal.Title><IoClose onClick={() => setShowModalCompany(false)} style={{ fontSize: "24px" }} />
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Label htmlFor="company">Company VATIN <span style={{ color: "red" }}>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                name="vatin"
                                placeholder="Enter company vatin"
                                onChange={handleChange}
                            />
                            <Form.Label htmlFor="company">Company Name <span style={{ color: "red" }}>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Enter company name"
                                onChange={handleChange}
                            />
                            <Form.Label htmlFor="company">Company Tax-ID Card No <span style={{ color: "red" }}>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                name="taxId"
                                placeholder="Enter Tax-ID"
                                onChange={handleChange}
                            />
                            <Form.Label htmlFor="company">Phone Number <span style={{ color: "red" }}>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                name="phone"
                                placeholder="Enter phone"
                                onChange={handleChange}
                            />
                            <Form.Label htmlFor="company">Email <span style={{ color: "red" }}>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                name="email"
                                placeholder="Enter Email"
                                onChange={handleChange}
                            />
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModalCompany(false)}>Close</Button>
                        <Button variant="primary" onClick={handleSubmit}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}

        </div>
    )
}
