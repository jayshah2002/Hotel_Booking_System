import React, { useState } from 'react';
import MenuAppBar from '../MenuAppBar';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios';

function BookingCreate() {

    const [details, setdetail] = useState({
        bookid: "", person: "", checkin: "", checkout: "", roomType: ""
    })
    const username=localStorage.getItem("Username")
    console.log(username)   
    async function save(event) {

        event.preventDefault();
        try {
            const book=await axios.post("https://localhost:7159/api/Bookings", {
                userName:username,
                noOfPersons: details.person,
                Checkin: details.checkin,
                Checkout: details.checkout,
                Room_type: details.roomType,
    

            });
            console.log(book.data);
            localStorage.setItem("bookID",book.data.bookId);
            alert("Thank you for visiting our site Your booking is Confirmed Successfully ");
            setdetail("");

        }
        catch (err) {
            alert(err);
        }
    }

    let name, value;
    const onChangeInput = (e) => {
        name = e.target.name;
        value = e.target.value;
        setdetail({ ...details, [name]: value });
    }

    return (
        <div>
            <MenuAppBar />
            <div className="info container">Book your Room</div><br />
            <center>

                <div className="container mt-4">
                    <form>
                        <input
                            type="text"
                            className="form-control"
                            id="bookid"
                            name="bookid"
                            hidden
                            value={details.bookid}
                            onChange={onChangeInput}
                        />


                        <TextField
                            style={{ width: "200px", margin: "5px" }}
                            type="number"
                            label="Number of Persons"
                            name="person"
                            variant="outlined"
                            value={details.person}
                            onChange={onChangeInput}
                        />
                        <br />
                        <InputLabel >Arrival</InputLabel>
                        <TextField
                            style={{ width: "200px", margin: "5px" }}
                            type="date"
                            name="checkin"
                            variant="outlined"
                            onChange={onChangeInput}
                            value={details.checkin}
                        />
                        <br />
                        <InputLabel >Departure</InputLabel>
                        <TextField
                            style={{ width: "200px", margin: "5px" }}
                            type="date"
                            name="checkout"
                            variant="outlined"
                            onChange={onChangeInput}
                            value={details.checkout}
                        />
                        <br />
                        <InputLabel >Room Type</InputLabel>
                        <Select
                            style={{ width: "200px", margin: "5px" }}
                            id="demo-simple-select"
                            value={details.roomType}
                            variant="outlined"
                            label="Room type"
                            name="roomType"
                            onChange={onChangeInput}
                        >
                            <MenuItem value={"Normal"}>Normal</MenuItem>
                            <MenuItem value={"Delux"}>Delux</MenuItem>
                            <MenuItem value={"Super Delux"}>Super Delux</MenuItem>
                        </Select>
                        <br /><br/>
                        <Button variant="contained" color="primary" onClick={save}>
                            Book now
                        </Button>


                    </form>
                </div>
                <br></br>
            </center>



        </div>
    );
}

export default BookingCreate;