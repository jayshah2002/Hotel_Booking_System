import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import MenuAppBar from "../MenuAppBar";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function BookingUpdate() {
    const [bookid, setId] = useState(null);
    const [person, setperson] = useState(null);
    const [checkin, setcheckin] = useState(null);
    const [checkout, setcheckout] = useState(null);
    const [room_type, setroom_type] = useState(null);

    useEffect(() => {
        setId(localStorage.getItem('Id'));
        setperson(localStorage.getItem('Name'));
        setcheckin(localStorage.getItem('Checkin'));
        setcheckout(localStorage.getItem('Checkout'));
        setroom_type(localStorage.getItem('RoomType'));
    }, []);
    const username=localStorage.getItem("Username")
    const updateData = () => {
        axios.put(`https://localhost:7159/api/Bookings/${bookid}`, {
            bookId: bookid,
            userName:username,
            noOfPersons: person,
            Checkin: checkin,
            Checkout: checkout,
            Room_type: room_type,
        })
        alert("Your Booking Details is Update SuccessFully");
    }
    return (
        <div>
            <MenuAppBar />
            <center>
                <div className="info container">Update Your Booking Details</div><br />


                <div className="container mt-4">
                    <form>



                        <TextField
                            style={{ width: "200px", margin: "5px" }}
                            type="number"
                            label="Number of Persons"
                            name="person"
                            variant="outlined"
                            value={person}
                            onChange={(e) => setperson(e.target.value)}
                        />
                        <br />
                        <InputLabel >Arrival</InputLabel>
                        <TextField
                            style={{ width: "200px", margin: "5px" }}
                            type="date"
                            name="checkin"
                            variant="outlined"
                            onChange={(e) => setcheckin(e.target.value)}
                            value={checkin}
                        />
                        <br />
                        <InputLabel >Departure</InputLabel>
                        <TextField
                            style={{ width: "200px", margin: "5px" }}
                            type="date"
                            name="checkout"
                            variant="outlined"
                            onChange={(e) => setcheckout(e.target.value)}
                            value={checkout}
                        />
                        <br />
                        <InputLabel >Room Type</InputLabel>
                        <Select
                            style={{ width: "200px", margin: "5px" }}
                            id="demo-simple-select"
                            value={room_type}
                            variant="outlined"
                            label="Room type"
                            name="roomType"
                            onChange={(e) => setroom_type(e.target.value)}
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
        </div>
    );
}

export default BookingUpdate;