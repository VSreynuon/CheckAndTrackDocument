import React, { useState } from 'react'
import "../styles/pullDataLastMonth.css";
import { Button, Dropdown, Form, Table } from 'react-bootstrap';
import { MdFilterListAlt, MdSearch } from 'react-icons/md';
export default function PullDataLastMonth() {
    const [selectedDate, setSelectedDate] = useState(" ");

    const [data, setData] = useState([
        { id: 1, name: "Sreylik", date: "2025-04-29", selected: false },
        { id: 2, name: "John Doe", date: "2025-04-28", selected: false },
        { id: 3, name: "Jane Smith", date: "2025-04-27", selected: false },
    ]);

    // function filter data based on selected month or year
    const filteredData = data.filter(row => {
        if (!selectedDate) return true; // Show all data if no date is aelect
        const selected = new Date(selectedDate);
        const rowDate = new Date(row.date);
        return (
            selected.getFullYear() === rowDate.getFullYear() &&
            selected.getMonth() === rowDate.getMonth()
        );
    });



    return (
        <div className="container">

            <div className="d-flex pt-3" style={{ gap: "15px" }}>
                {/* select date */}
                <div className="select-container">
                    <label>Select Date:</label>
                    <input
                        type="date"
                        className="date-input"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                    />
                </div>
                {/* add to new month button */}
                <div className="select-container">
                    <Button variant="primary">
                        Add data to new month
                    </Button>
                </div>
            </div>


            {/* Table */}
            <Table striped bordered hover size="sm" >
                <thead className="table-primary" >
                    <tr className="short-row">
                        <th>No</th>
                        <th>Company VATIN</th>
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
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><input type="checkbox" /></td>
                        <td><input type="checkbox" /></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><input type="checkbox" /></td>
                        <td><input type="checkbox" /></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
