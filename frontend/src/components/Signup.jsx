import React, { useState, useEffect } from 'react'
import { Grid, Paper, Avatar, TextField, Button } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import axios from "axios";
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';



export default function Signup() {
    const paperStyle = {
        padding: 40,
        height: "70vh",
        width: "50vw",
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

  const[name,setName]=useState("");
  const[lastName,setLastName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[verifyPassword, setVerifyPassword]=useState("");

  function handleNameChange(event){
    setName(event.target.value);
  }
  function handleLastNameChange(event){
    setLastName(event.target.value);
  }
  function handleEmailChange(event){
    setEmail(event.target.value);
  } 
  function handlePasswordChange(event){
    setPassword(event.target.value);
  }
  function handleVerifyPassword(event){
    setVerifyPassword(event.target.value);
  }

  function handleSignupSubmit(event){
    if(password===verifyPassword){
      const url = "http://localhost:8000/api/user/register";
      axios
        .post(url, {
          name: name,
          lastName: lastName,
          email: email,
          password: password,
        })
        .then(()=>{
          window.location.pathname="/login"
        })
        .catch((error) => {
          alert("Error: Please make sure your password is more than 6 characters and the e-mail address entered is not used by other users ");
        });
    } else{
      alert("passwords do not match")
    }
    
    event.preventDefault();
    setName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setVerifyPassword("");
  }
    return (
        <Grid className="registration">
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'><Avatar style={avatarStyle}><AddCircleIcon/></Avatar>
                <h2>Signup</h2></Grid> 
                <TextField label= 'First Name' color="warning" placeholder='Enter your first-name' fullWidth variant="standard" onChange={(event) => handleNameChange(event)}
                value={name} required />
                <TextField label= 'Last Name' color="warning" placeholder='Enter your last-name' fullWidth variant="standard" onChange={(event) => handleLastNameChange(event)}
                value={lastName} required />
                <TextField label= 'Email'  color="warning" placeholder='Enter your email' fullWidth variant="standard" onChange={(event) => handleEmailChange(event)}
                value={email} required />
                <TextField label= 'Password' color="warning" placeholder='Enter your password' type="password" variant="standard" onChange={(event) => handlePasswordChange(event)}
                value={password} fullWidth required />
                <TextField label= 'Verify Password' color="warning" placeholder='Verify your password' type="password" variant="standard" fullWidth onChange={(event) => handleVerifyPassword(event)}
                value={verifyPassword} required />
                <StyledButton onClick={(event) => handleSignupSubmit(event)} variant="contained" type='submit' >Signup</StyledButton>
                <Link to="/login" className="register"> Already have an account?</Link>
            </Paper>
        </Grid>
    )
}

const StyledButton = styled(Button)`
  color: white;
  background-color: #e14f4f;

  &:hover {
    background-color: #c9442cc5;
  }
`;