import React, { useState, useEffect } from 'react'
import { Grid, Paper, Avatar, TextField, Button } from '@mui/material'
import LockOutlined from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';
import axios from "axios";


export default function Login() {
    const paperStyle = {
        padding: 40,
        height: "55vh",
        width: "40vw",
        margin: "20px auto",
        display: "flex",
        flexDirection:  "column",
        justifyContent:  "space-between",
        alignItems: "center",
        color: '#e14f4f'
    }
    const avatarStyle = {
        backgroundColor: '#e14f4f',
        width: "3rem",
        height: "3rem"
    }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
   localStorage.clear();
  }, [])

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function handleLoginSubmit(event) {
      const url = "http://localhost:8000/api/user/login";
      axios
        .post(url, {
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("token", JSON.stringify(res.data.token));
          window.location.pathname = "/";
        })
        .catch((error) => {
          alert(
            "Error: The email and password do not match "
          );
        });

    event.preventDefault();
    setEmail("");
    setPassword("");
    

  }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'><Avatar style={avatarStyle}><LockOutlined/></Avatar>
                <h2>Login</h2></Grid> 
                <TextField label= 'Email' placeholder='Enter your email' fullWidth variant="standard"   value={email} onChange={(event) => handleEmailChange(event)} required />
                <TextField label= 'Password' placeholder='Enter your password' type="password" variant="standard" fullWidth value={password}  onChange={(event) => handlePasswordChange(event)} required />
                <Button onClick={(event) => handleLoginSubmit(event)} variant="contained" type='submit' sx={{backgroundColor: '#e14f4f' }}>Login</Button>
                <Link to="/signup" className="register"> Don't have an account yet?</Link>
            </Paper>
        </Grid>
    )
}
