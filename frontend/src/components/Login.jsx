import React, { useState, useEffect, useContext } from 'react'
import { Grid, Paper, Avatar, TextField, Button } from '@mui/material'
import LockOutlined from '@mui/icons-material/LockOutlined';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import AuthContext from '../context/AuthContext';
import styled from '@emotion/styled';



export default function Login() {
    const paperStyle = {
        padding: 40,
        height: "55vh",
        width: "40vw", 
        margin: " auto",
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
  const countryContext = useContext(AuthContext);
  const navigate = useNavigate();

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
          const countriesArray = res.data.user.savedCountries;
          countryContext.setSavedCountriesArray(countriesArray)
          localStorage.setItem("token", JSON.stringify(res.data.token));
          navigate('/'); 
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
      <div className="registration">
        <Grid >
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'><Avatar style={avatarStyle}><LockOutlined/></Avatar>
                <h2>Login</h2></Grid> 
                <TextField label= 'Email' color="warning" placeholder='Enter your email' fullWidth variant="standard"   value={email} onChange={(event) => handleEmailChange(event)} required />
                <TextField label= 'Password' color="warning" placeholder='Enter your password' type="password" variant="standard" fullWidth value={password}  onChange={(event) => handlePasswordChange(event)} required />
                <StyledButton onClick={(event) => handleLoginSubmit(event)} variant="contained" type='submit'>Login</StyledButton>
                <Link to="/signup" className="register"> Don't have an account yet?</Link>
            </Paper>
        </Grid>
        </div>
    )
}

const StyledButton = styled(Button)`
  color: white;
  background-color: #e14f4f;

  &:hover {
    background-color: #c9442cc5;
  }
`;
