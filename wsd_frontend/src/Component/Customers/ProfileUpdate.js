import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import MenuAppBar from "../MenuAppBar";

function ProfileUpdate() {
  const [detail,setDetail]=useState({id:"",name:"",email:"",mobile:"",city:"",state:"",country:"",address:""});
    detail.id=localStorage.getItem("Id");
    const getData = () => {
      axios.get(`https://localhost:7159/api/Users/${detail.id}`)
      .then((getData)=>{
        setDetail(getData.data);
      })
    }
    useEffect(() => {
        getData();
    }, []);
    const username=localStorage.getItem('Username')
    const password=localStorage.getItem("Password")
    console.log(detail.id)
    const updateData = () => {
        axios.put(`https://localhost:7159/api/Users/${detail.id}`, {
            Id: detail.id,
            username:username,
            password:password,
            name: detail.name,
            email: detail.email,
            mobile: detail.mobile,
            city: detail.city,
            state: detail.state,
            address: detail.address
        })
        
        alert("Your Profile is Update SuccessFully");
    }
    let name,value;
    const handler=(e)=>{
      name = e.target.name;
    value = e.target.value;
    setDetail({ ...detail, [name]: value });
    }
    return (
        <div class="bg-[url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000')]">
        <MenuAppBar/>
        <center>
        <div className="info container">Update Your Profile</div><br />

<div className="container mt-4">

  <form>
    
      <TextField
        style={{ width: "500px", margin: "13px" }}
        type="text"
        label="Name"
        name="name"
        variant="outlined"
        value={detail.name}
        onChange = {handler} 
        />
   
      
      <br />
      <TextField
        style={{ width: "500px", margin: "13px" }}
        type="email"
        label="Email"
        name="email"
        variant="outlined"
        onChange = {handler} 
        value={detail.email}
        />
      <br />
      <TextField
        style={{ width: "500px", margin: "13px" }}
        type="number"
        name="mobile"
        label="Mobile number"
        variant="outlined"
        onChange = {handler} 
        value={detail.mobile}
        />
      <br />
      <TextField
        style={{ width: "500px", margin: "13px" }}
        type="text"
        label="City"
        name="city"
        variant="outlined"
        onChange = {handler} 
        value={detail.city}
      />
      <br />
      <TextField
        style={{ width: "500px", margin: "13px" }}
        type="text"
        label="State"
        name="state"
        variant="outlined"
        onChange = {handler} 
        value={detail.state}
        />
      <br />
      <TextField
        style={{ width: "500px", margin: "13px" }}
        type="address"
        label="Address"
        name="address"
        variant="outlined"
        onChange = {handler} 
        value={detail.address}
        />
      <br />
      
      
  </form>
</div>
<br></br>
           
            <Button variant="contained" color="primary" onClick={updateData}>
              Update Profile
            </Button>
    </center>
            </div>
    );
}

export default ProfileUpdate;