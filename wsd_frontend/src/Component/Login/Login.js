import * as React from 'react';
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
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const theme = createTheme();

export default function Login() {
    const [login, setlogin] = useState({ username: "", password: "" })
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        if (login.username === "jayshah2002" && login.password === "jay") {
            navigate('/myprofile/read')
        }
        else {
            event.preventDefault();
            try {
                const res = await axios.post("https://localhost:7159/api/Auth/Login", {
                    userName: login.username,
                    password: login.password

                })
                // console.log(res.data)
                
                // const token=localStorage.setItem("token" ,res.data.token)
                if (res.data.username && res.data.password) {
                        localStorage.setItem("Username",res.data.username)
                        localStorage.setItem("Password",res.data.password)
                        localStorage.setItem("Token",res.data.token)
                        alert("Thanks!! Your SuccessFully Login");
                        navigate('/')
                  }
                  else {
                    alert("Invalid Credentials")
                  }

                setlogin("");



            }
            catch (err) {
                alert(err);
            }
        }
    };
    let name, value;
    const onChangeInput = (e) => {
        name = e.target.name;
        value = e.target.value;
        setlogin({ ...login, [name]: value });
    }
    const Signup = () => {
        navigate('/register')
    }
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
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="UserName"
                            name="username"
                            type='text'
                            onChange={onChangeInput}
                            value={login.username}

                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            onChange={onChangeInput}
                            value={login.password}
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            required
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>

                        <Grid item>
                            <Link onClick={Signup} variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>

                        </Grid>
                    </Box>
                </Box>

            </Container>
        </ThemeProvider >
    );
}