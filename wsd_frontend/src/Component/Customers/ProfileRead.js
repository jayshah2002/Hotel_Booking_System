import React, { useState,useEffect } from 'react';
import MenuAppBar from '../MenuAppBar';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from '@mui/material';
import axios from 'axios';
import "react-bootstrap"
import { Link } from "react-router-dom";
import './Customer.css';
// console.log("Customer")
function ProfileRead() {
    <MenuAppBar/>
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        axios.get('https://localhost:7200/api/Customers')
        .then((response) => {
            console.log(response.data)
            setDetail(response.data);
        })
      },[])
  
      const setData = (data) => {
        console.log(data);
        let {cust_id, name,email,mobile,city,state,address} = data;
        localStorage.setItem('Id',cust_id);
        localStorage.setItem('Name',name);
        localStorage.setItem('Email',email);
        localStorage.setItem('Mobile',mobile);
        localStorage.setItem('City',city);
        localStorage.setItem('State',state);
        localStorage.setItem('Address',address);
      }
      const getData = () => {
        axios.get('https://localhost:7200/api/Customers')
        .then((getData)=>{
          setDetail(getData.data);
        })
      }
      const onDelete = (id) =>{
        
        axios.delete(`https://localhost:7200/api/Customers/${id}`)
        .then(()=>{
          getData();
        })
      } 
      console.log(detail.forEach(data => console.log(data.cust_id)) );
      
  
  
  
  
  return (
    <div>
      <MenuAppBar />
      <div>
      <div className="info container">Customers Profile</div><br />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Mobile Number</TableCell>
              <TableCell>City</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
                detail.map(
                    (data) =>{ 
                        return (
                        <TableRow>
                            <TableCell>{data.cust_id}</TableCell>  
                            <TableCell >{data.name}</TableCell>
                            <TableCell >{data.email}</TableCell>
                            <TableCell >{data.mobile}</TableCell>
                            <TableCell >{data.city}</TableCell>
                            <TableCell >{data.state}</TableCell>
                            <TableCell >{data.address}</TableCell>
                            <Link to ='/myprofile/update'>
                            <TableCell ><Button className="btn btn-success" onClick={()=>setData(data)}>Edit</Button></TableCell>
                            </Link> 
                            <TableCell ><Button onClick={()=>onDelete(data.cust_id)}>Delete</Button></TableCell>
                        </TableRow>
                        )
                    }
                )
            }
          </TableBody>
        </Table>
    </div>
    </div>
  );
}

export default ProfileRead