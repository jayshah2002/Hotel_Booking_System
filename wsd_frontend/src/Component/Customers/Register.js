import React, { useState } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Customer.css';
import { useNavigate } from 'react-router-dom';
// console.log("Customer")
function ProfileCreate() {
  const navigate = useNavigate()
  const [details, setdetail] = useState({
    id: "", username: "", password: "", name: "", email: "", mobile: "", city: "", state: "", address: ""
  })

  async function save(event) {

    event.preventDefault();
    try {
      const obj=await axios.post("https://localhost:7159/api/Users", {
        userName: details.username,
        password: details.password,
        name: details.name,
        email: details.email,
        mobile: details.mobile,
        address: details.address,
        city: details.city,
        state: details.state,

      });
      console.log(obj.data)
      alert("Thanks!! Your Profile is being Created Succesfully");
      navigate('/login')
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

  const login = () => {
    navigate('/login')
  }


  const theme = createTheme();
  return (

    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form onSubmit={save}>
            <Grid container spacing={2}>
              <Grid item xs={20}>
                <input
                  type="text"
                  className="form-control"
                  id="id"
                  name="id"
                  hidden
                  value={details.id}
                  onChange={onChangeInput} />
              </Grid>
              <Grid item xs={20} >
                <TextField
                  style={{ width: "500px", margin: "5px" }}
                  type="text"
                  label="UserName"
                  name="username"
                  variant="outlined"
                  value={details.username}
                  onChange={onChangeInput}
                />
              </Grid>
              <Grid item xs={20}>
                <TextField
                  style={{ width: "500px", margin: "5px" }}
                  type="password"
                  label="Password"
                  name="password"
                  variant="outlined"
                  value={details.password}
                  onChange={onChangeInput}
                />
              </Grid>
              <Grid item xs={20}>
                <TextField
                  style={{ width: "500px", margin: "5px" }}
                  type="text"
                  label="Name"
                  name="name"
                  variant="outlined"
                  value={details.name}
                  onChange={onChangeInput}
                />
              </Grid>
              <Grid item xs={20}>
                <TextField
                  style={{ width: "500px", margin: "5px" }}
                  type="email"
                  label="Email"
                  name="email"
                  variant="outlined"
                  onChange={onChangeInput}
                  value={details.email}
                />
              </Grid>
              <Grid item xs={20}>
                <TextField
                  style={{ width: "500px", margin: "5px" }}
                  type="number"
                  name="mobile"
                  label="Mobile number"
                  variant="outlined"
                  onChange={onChangeInput}
                  value={details.mobile}
                />
              </Grid>
              <Grid item xs={20}>
                <TextField
                  style={{ width: "500px", margin: "5px" }}
                  type="text"
                  label="City"
                  name="city"
                  variant="outlined"
                  onChange={onChangeInput}
                  value={details.city}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  style={{ width: "500px", margin: "5px" }}
                  type="text"
                  label="State"
                  name="state"
                  variant="outlined"
                  onChange={onChangeInput}
                  value={details.state}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  style={{ width: "500px", margin: "5px" }}
                  type="address"
                  label="Address"
                  name="address"
                  variant="outlined"
                  onChange={onChangeInput}
                  value={details.address}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel required
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </form>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link onClick={login} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>

      </Container>
    </ThemeProvider>


  );
}

export default ProfileCreate