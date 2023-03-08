import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import MenuAppBar from "../MenuAppBar";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function BookingUpdate() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [address, setAddress] = useState('');
    const [id, setId] = useState(null);

    useEffect(() => {
        setId(localStorage.getItem('Id'));
        setName(localStorage.getItem('Name'));
        setEmail(localStorage.getItem('Email'));
        setMobile(localStorage.getItem('Mobile'));
        setCity(localStorage.getItem('City'));
        setState(localStorage.getItem('State'));
        setAddress(localStorage.getItem('Address'));
    }, []);

    const updateData = () => {
        axios.put(`https://localhost:7200/api/Customers/${id}`, {
            cust_id: id,
            name: name,
            email: email,
            mobile: mobile,
            city: city,
            state: state,
            address: address
        })
        alert("Your Profile is Update SuccessFully");
    }
    return (
        <div>
        <MenuAppBar/>
        <center>
        <div className="info container">Update Your Booking Details</div><br />

        <div className="container mt-4">
                    <form>
                        <input
                            type="text"
                            className="form-control"
                            id="bookid"
                            name="bookid"
                            hidden
                            value={id}
                            onChange = {(e) => setName(e.target.value)} 
                        />


                        <TextField
                            style={{ width: "200px", margin: "5px" }}
                            type="number"
                            label="Number of Persons"
                            name="person"
                            variant="outlined"
                            value={name}
                            onChange = {(e) => setName(e.target.value)} 
                        />
                        <br />
                        <TextField
                            style={{ width: "200px", margin: "5px" }}
                            type="date"
                            label="Checkin"
                            name="checkin"
                            variant="outlined"
                            onChange = {(e) => setName(e.target.value)} 
                            value={email}
                        />
                        <br />
                        <TextField
                            style={{ width: "200px", margin: "5px" }}
                            type="date"
                            name="checkout"
                            label="Checkout"
                            variant="outlined"
                            onChange = {(e) => setName(e.target.value)} 
                            value={mobile}
                        />
                        <br />
                        <InputLabel >Room Type</InputLabel>
                        <Select
                            style={{ width: "200px", margin: "5px" }}
                            id="demo-simple-select"
                            value={city}
                            variant="outlined"
                            label="Room type"
                            name="roomType"
                            onChange = {(e) => setName(e.target.value)} 
                        >
                            <MenuItem>Normal</MenuItem>
                            <MenuItem>Delux</MenuItem>
                            <MenuItem>Super Delux</MenuItem>
                        </Select>
                        <br /><br/>
                        


                    </form>
                </div>
<br></br>
          
           
            <br />
            <Button variant="contained" color="primary" onClick={updateData}>
              Update Profile
            </Button>
    </center>
            </div>
    );
}

export default BookingUpdate;