import React from 'react';
import "../styles/taxdeclaration.css";
import AddButton from "../components/AddButton.js";
import SearchBar from '../components/SearchBar.js';
import FilterButton from "../components/FilterButton.js";
import { Button, Form, Table } from 'react-bootstrap';
import PaginatedList from '../components/PaginatedList.js';
import { FaPlus } from 'react-icons/fa6';

export default function TaxDeclaration() {
    return (
        <div className="container-tax">
            <div className="justify-content-end me-2">
                <Button variant="primary"><FaPlus /></Button>
            </div>
            
            <Form className="d-flex ">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 custom-search"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Project name</th>
                        <th>Total company</th>
                        <th>Company finish</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
            <PaginatedList />
        </div>
    )
}
