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
        axios.get('https://localhost:7159/api/Users')
        .then((response) => {
            console.log(response.data)
            setDetail(response.data);
        })
      },[])
  
      
      const getData = () => {
        axios.get('https://localhost:7159/api/Users')
        .then((getData)=>{
          setDetail(getData.data);
        })
      }
      const onDelete = (id) =>{
        
        axios.delete(`https://localhost:7159/api/Users/${id}`)
        .then(()=>{
          getData();
        })
      } 
      console.log(detail.forEach(data => console.log(data.Id)) );
      
  
  
  
  
  return (
    <div>
      <MenuAppBar />
      <div>
      <div className="info container">Customers Profile</div><br />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>UserName</TableCell>
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
                            <TableCell>{data.id}</TableCell> 
                            <TableCell>{data.userName}</TableCell> 
                            <TableCell >{data.name}</TableCell>
                            <TableCell >{data.email}</TableCell>
                            <TableCell >{data.mobile}</TableCell>
                            <TableCell >{data.city}</TableCell>
                            <TableCell >{data.state}</TableCell>
                            <TableCell >{data.address}</TableCell>
                            
                            <TableCell ><Button onClick={()=>onDelete(data.id)}>Delete</Button></TableCell>
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