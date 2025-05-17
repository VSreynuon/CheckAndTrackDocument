import React from 'react'
import "../styles/sidebar.css";
import logo from "../assets/logo.jpg";
import { useNavigate } from 'react-router-dom';
import { IoPerson } from 'react-icons/io5';
import {  MdDiversity3, MdFolderSpecial, MdOutlineAssuredWorkload, MdSettings } from 'react-icons/md';
import { VscVerifiedFilled } from 'react-icons/vsc';
import { FaArrowsRotate, FaRankingStar } from 'react-icons/fa6';
import { SiQuickbooks } from 'react-icons/si';
import { PiSignOutFill } from 'react-icons/pi';

export default function Sidebar() {
    const navigate = useNavigate();

    const handleChange = (e) => {
        navigate(`/${e.target.value}`);
    }
    return (
        <div className="menu">
            <div className="logo">
                <img className="logo-img" src={logo} alt="Logo" />
                <h2>Check & Track Document</h2>
            </div>
            <div className="menu-list">
                <div className="item">
                    <IoPerson className="icon" />
                    <select className="dropdown" onChange={handleChange}>
                        <option value="" disabled selected>Administration</option>
                        <option className="list-item" value="information">Information</option>
                        <option className="list-item" value="exchange-rate">Exchange Rate</option>
                    </select>
                </div>
                <div className="item">
                    <MdOutlineAssuredWorkload className="icon" />
                    <select className="dropdown" onChange={handleChange}>
                        <option className="list-item" value="tax-declaration">Tax Declaration</option>
                        <option className="list-item" value="information">Information</option>
                        <option className="list-item" value="exchange-rate">Exchange Rate</option>
                    </select>
                </div>
                <div className="item">
                    <VscVerifiedFilled className="icon" />
                    <select className="dropdown" onChange={handleChange}>
                        <option value="" disabled selected>JS Information</option>
                        <option className="list-item" value="information">Information</option>
                        <option className="list-item" value="exchange-rate">Exchange Rate</option>
                    </select>
                </div>
                <div className="item">
                    <MdDiversity3 className="icon" />
                    <select className="dropdown" onChange={handleChange}>
                        <option value="" disabled selected>Clients Information</option>
                        <option className="list-item" value="information">Information</option>
                        <option className="list-item" value="exchange-rate">Exchange Rate</option>
                    </select>
                </div>
                <div className="item">
                    <MdFolderSpecial className="icon" />
                    <select className="dropdown" onChange={handleChange}>
                        <option value="" disabled selected>Report</option>
                        <option className="list-item" value="information">Information</option>
                        <option className="list-item" value="exchange-rate">Exchange Rate</option>
                    </select>
                </div>
                <div className="item">
                    <div className="title">
                        <FaArrowsRotate className="icon" />
                        <h6>Exchange Rate</h6>
                    </div>
                </div>
                <div className="item">
                    <div className="title">
                        <SiQuickbooks className="icon" />
                        <h6>Quickbook</h6>
                    </div>
                </div>
                <div className="item">
                    <div className="title">
                        <FaRankingStar className="icon" />
                        <h6>Analysis</h6>
                    </div>
                </div>
                <div className="item">
                    <div className="title">
                        <MdSettings className="icon" />
                        <h6>Setting</h6>
                    </div>
                </div>
                <div className="item">
                    <div className="title">
                        <PiSignOutFill className="icon" />
                        <h6>Sign out</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
