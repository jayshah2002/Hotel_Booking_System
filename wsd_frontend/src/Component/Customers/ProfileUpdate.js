import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import MenuAppBar from "../MenuAppBar";

function ProfileUpdate() {
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
        <h3>Update Your Profile</h3>

<div className="container mt-4">

  <form>
    
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text"
        label="Name"
        name="name"
        variant="outlined"
        value={name}
        onChange = {(e) => setName(e.target.value)} 
        />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="email"
        label="Email"
        name="email"
        variant="outlined"
        onChange = {(e) => setEmail(e.target.value)} 
        value={email}
        />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="number"
        name="mobile"
        label="Mobile number"
        variant="outlined"
        onChange = {(e) => setMobile(e.target.value)} 
        value={mobile}
        />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text"
        label="City"
        name="city"
        variant="outlined"
        onChange = {(e) => setCity(e.target.value)} 
        value={city}
      />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text"
        label="State"
        name="state"
        variant="outlined"
        onChange = {(e) => setState(e.target.value)} 
        value={state}
        />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="address"
        label="Address"
        name="address"
        variant="outlined"
        onChange = {(e) => setAddress(e.target.value)} 
        value={address}
        />
      <br />
      
      
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

export default ProfileUpdate;