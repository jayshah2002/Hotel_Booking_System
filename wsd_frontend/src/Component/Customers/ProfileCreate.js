import React, { useState } from 'react';
import MenuAppBar from '../MenuAppBar';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import axios from 'axios';
import './Customer.css';
// console.log("Customer")
function ProfileCreate() {

  const [details,setdetail]=useState({
    id:"",name:"",email:"",mobile:"",city:"",state:"",address:""
  })
  
  
  async function save(event) {
  
    event.preventDefault();
    try {
      await axios.post("https://localhost:7200/api/Customers", {
        
        name: details.name,
        email: details.email,
        mobile:details.mobile,
        city:details.city,
        state:details.state,
        address:details.address
      
      });
      alert("Thanks!! Your Profile is being Created Succesfully");
      setdetail("");
      
    } 
    catch (err) {
      alert(err);
    }
  }
  
  let name,value;
  const onChangeInput=(e)=>{
     name=e.target.name;
    value=e.target.value;
    setdetail({...details,[name]:value});
  }
  
  
  
  
  
  return (
    <div>
      <MenuAppBar />
      <div className="info container">Your Profile</div><br />
      <center>

      <div className="container mt-4">
        <form>
          <input
            type="text"
            className="form-control"
            id="id"
            name="id"
            hidden
            value={details.id}
            onChange={onChangeInput}
          />

          
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="Name"
              name="name"
              variant="outlined"
              value={details.name}
              onChange={onChangeInput}
              />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="email"
              label="Email"
              name="email"
              variant="outlined"
              onChange={onChangeInput}
              value={details.email}
              />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="number"
              name="mobile"
              label="Mobile number"
              variant="outlined"
              onChange={onChangeInput}
              value={details.mobile}
              />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="City"
              name="city"
              variant="outlined"
              onChange={onChangeInput}
              value={details.city}
            />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="State"
              name="state"
              variant="outlined"
              onChange={onChangeInput}
              value={details.state}
              />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="address"
              label="Address"
              name="address"
              variant="outlined"
              onChange={onChangeInput}
              value={details.address}
              />
            <br />
            <Button variant="contained" color="primary" onClick={save}>
              Create Profile
            </Button>
            
        </form>
      </div>
      <br></br>
          </center>
           
      

    </div>

  );
}

export default ProfileCreate