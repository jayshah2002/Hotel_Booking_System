import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import MenuAppBar from "../MenuAppBar";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Footer from "../footer";

function BookingUpdate() {
    const [book,setbook]=useState({bookid:"",noOfPersons:"",checkin:"",checkout:"",room_type:""})
    book.bookid = localStorage.getItem("bookID");
    const getData = () => {
        axios.get(`https://localhost:7159/api/Bookings/${book.bookid}`)
        .then((getData)=>{
          setbook(getData.data);
        })
    }
    
    useEffect(() => {
        getData();
    }, []);
    let name,value;
    const handleBook=(e)=>{
        name = e.target.name;
        value = e.target.value;
        setbook({ ...book, [name]: value });
    }
    console.log(book.p)
    console.log(book.checkin)
    const username=localStorage.getItem("Username")
    const updateData = () => {
        axios.put(`https://localhost:7159/api/Bookings/${book.bookid}`, {
            bookId: book.bookid,
            userName:username,
            noOfPersons: book.noOfPersons,
            Checkin: book.checkin,
            Checkout: book.checkout,
            Room_type: book.room_type,
        })
        alert("Your Booking Details is Update SuccessFully");
    }
    return (
        
        <div class="bg-[url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000')] ">
            <MenuAppBar />
            <center>
                <div className="info container">Update Your Booking Details</div><br />


                <div className="container mt-4">
                    <form>



                        <TextField
                            style={{ width: "500px", margin: "5px" }}
                            type="number"
                            label="Number of Persons"
                            name="noOfPersons"
                            variant="outlined"
                            value={book.noOfPersons}
                            onChange={handleBook}
                        />
                        <br />
                        <InputLabel >Arrival</InputLabel>
                        <TextField
                            style={{ width: "500px", margin: "5px" }}
                            type="date"
                            name="checkin"
                            variant="outlined"
                            onChange={handleBook}
                            value={book.checkin}
                        />
                        <br />
                        <InputLabel >Departure</InputLabel>
                        <TextField
                            style={{ width: "500px", margin: "5px" }}
                            type="date"
                            name="checkout"
                            variant="outlined"
                            onChange={handleBook}
                            value={book.checkout}
                        />
                        <br />
                        <InputLabel >Room Type</InputLabel>
                        <Select
                            style={{ width: "500px", margin: "5px" }}
                            id="demo-simple-select"
                            value={book.room_type}
                            variant="outlined"
                            label="Room type"
                            name="room_type"
                            onChange={handleBook}
                        >
                            <MenuItem value={"Normal"}>Normal</MenuItem>
                            <MenuItem value={"Delux"}>Delux</MenuItem>
                            <MenuItem value={"Super Delux"}>Super Delux</MenuItem>
                        </Select>
                        <br /><br />
                        <Button variant="contained" color="primary" onClick={updateData}>
                            Update Your Booking Details
                        </Button>


                    </form>
                </div>
                <br></br>


                <br />
               
            </center>
            <Footer />
        </div>
        
    );
}

export default BookingUpdate;