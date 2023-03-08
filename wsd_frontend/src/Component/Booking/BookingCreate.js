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

    async function save(event) {

        event.preventDefault();
        try {
            await axios.post("https://localhost:7200/api/Bookings", {

                noOfPersons: details.person,
                Checkin: details.checkin,
                Checkout: details.checkout,
                Room_type: details.roomType,
    

            });
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
                            value={details.id}
                            onChange={onChangeInput}
                        />


                        <TextField
                            style={{ width: "200px", margin: "5px" }}
                            type="number"
                            label="Number of Persons"
                            name="person"
                            variant="outlined"
                            value={details.name}
                            onChange={onChangeInput}
                        />
                        <br />
                        <TextField
                            style={{ width: "200px", margin: "5px" }}
                            type="date"
                            label="Checkin"
                            name="checkin"
                            variant="outlined"
                            onChange={onChangeInput}
                            value={details.email}
                        />
                        <br />
                        <TextField
                            style={{ width: "200px", margin: "5px" }}
                            type="date"
                            name="checkout"
                            label="Checkout"
                            variant="outlined"
                            onChange={onChangeInput}
                            value={details.mobile}
                        />
                        <br />
                        <InputLabel >Room Type</InputLabel>
                        <Select
                            style={{ width: "200px", margin: "5px" }}
                            id="demo-simple-select"
                            value={details.city}
                            variant="outlined"
                            label="Room type"
                            name="roomType"
                            onChange={onChangeInput}
                        >
                            <MenuItem>Normal</MenuItem>
                            <MenuItem>Delux</MenuItem>
                            <MenuItem>Super Delux</MenuItem>
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