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


function BookingRead() {
    <MenuAppBar/>
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        axios.get('https://localhost:7159/api/Bookings')
        .then((response) => {
            console.log(response.data)
            setDetail(response.data);
        })
      },[])
  
      
      const getData = () => {
        axios.get('https://localhost:7159/api/Bookings')
        .then((getData)=>{
          setDetail(getData.data);
        })
      }
      const onDelete = (id) =>{
        
        axios.delete(`https://localhost:7159/api/Bookings/${id}`)
        .then(()=>{
          getData();
        })
      } 
      console.log(detail.forEach(data => console.log(data.Id)) );
      
  
  
    return (
        <div>
        <MenuAppBar />
        <div>
        <div className="info container">Booking Customers</div><br />
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>BookId</TableCell>
                <TableCell>UserName</TableCell>
                <TableCell>Number of Persons</TableCell>
                <TableCell>CheckIn</TableCell>
                <TableCell>CheckOut</TableCell>
                <TableCell>Room_type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {
                detail.map(
                    (data) =>{ 
                        return (
                        <TableRow>
                            <TableCell>{data.bookId}</TableCell> 
                            <TableCell>{data.userName}</TableCell> 
                            <TableCell >{data.noOfPersons}</TableCell>
                            <TableCell >{data.checkin}</TableCell>
                            <TableCell >{data.checkout}</TableCell>
                            <TableCell >{data.room_type}</TableCell>
                            
                            <TableCell ><Button onClick={()=>onDelete(data.bookId)}>Delete</Button></TableCell>
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

export default BookingRead;