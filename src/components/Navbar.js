import React, { useState } from 'react'
import "../styles/navbar.css";
import { FaBell} from 'react-icons/fa';
import profile from "../assets/profile.jpg";
import {Form } from 'react-bootstrap';


export default function Navbar() {
  // const [results, setResults] = useState([]);
  return (
    <div className="container">
      <div className="conttent-title">
        <h>JS Information</h>
      </div>
      <div className="content-navbar">
        {/* <SearchBar /> */}
        <Form className="d-flex ">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 custom-search"
            aria-label="Search"
          />
          {/* <Button variant="outline-success">Search</Button> */}
        </Form>
        <div className="notify">
          <FaBell className="notification-icon" />
          <span className="notification-count">3</span>
        </div>
        <div className="profile">
          <img className="profile-image" src={profile} alt="Profile" />
          <select className="profile-select">
            <option value="settings">Sreylik</option>
            <option value="settings">Settings</option>
          </select>
        </div>
      </div>
    </div>
  )
}

