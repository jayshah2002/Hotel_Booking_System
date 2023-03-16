import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {NavLink, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useEffect,useState } from 'react';
import axios from 'axios';

export default function MenuAppBar() {
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [detail, setDetail] = useState([]);
  const navigate=useNavigate();
  useEffect(() => {
    axios.get('https://localhost:7159/api/Users')
    .then((response) => {
        console.log(response.data)
        setDetail(response.data);
        setData(localStorage.getItem("Token"))
    })
  },[])
  
  // const getData = () => {
  //   axios.get('https://localhost:7159/api/Users')
  //   .then((getData)=>{
  //     setDetail(getData.data);
  //   })
  // }
  const setData = (data) => {
    console.log(data);
    let {Id} = data;
    localStorage.setItem('Id',data);
    
    // localStorage.setItem('Username',username)
    // localStorage.setItem('Name',name);
    // localStorage.setItem('Email',email);
    // localStorage.setItem('Mobile',mobile);
    // localStorage.setItem('City',city);
    // localStorage.setItem('State',state);
    // localStorage.setItem('Address',address);
  }
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleHome = (event) => {
    window.location.href = '/';
  };
  const handleLogin = () => {
    setAnchorEl(null);
    window.location.href = '/login';
  };
  const handleLogout=()=>{
    localStorage.clear()
    navigate("/login")
  }
  return (
    
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" >
        <Toolbar style={{backgroundColor:'yellowgreen'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hotel Booking System
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                
              >
                <MenuItem onClick={handleHome}>Home</MenuItem>
                
                {!(localStorage.getItem("Username"))?
                <MenuItem onClick={handleLogin}>Login</MenuItem>
                :
                <MenuItem onClick={handleLogout}>Logout</MenuItem>}
                
              </Menu>
            </div>
          )}
          {(localStorage.getItem("Username"))?<NavLink to="/myprofile/update"><MenuItem onClick={()=>setData(localStorage.getItem("Token"))}>Edit
                            </MenuItem></NavLink>:<div></div>}
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
