import { ThemeProvider } from "@emotion/react";
import { createTheme } from '@mui/material/styles';
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';

import {useNavigate} from "react-router-dom";

let theme = createTheme({
  palette: {
    primary: {
      main: '#c1ff72',
      dark: "#4d4d4d",
    },
    secondary: {
      main: '#ffffff',
    },
  },
});

theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
});

const LoginForm = () =>{
    const navigate = useNavigate();
    return(
        <ThemeProvider theme={theme}>
            <div className="createAccount">
                <button id="arrowLeft"><Icon path={mdiArrowLeft} size={3} onClick={() => navigate("/")}/></button>
                <h1 className="header">Login To Your Account</h1>
                    <Form.Group className="mb-3" controlId="createAccountForm">
                        <Form.Label>Email Address:<span id="required">*</span></Form.Label>
                        <Form.Control type="email" placeholder="johnny.smith@gmail.com" className="mb-3" style={{ width: "300px" }}/>
                        <Form.Label>Password:<span id="required">*</span></Form.Label>
                        <Form.Control type="password" className="mb-3"/>
                        <p id="required">Required *</p>
                    </Form.Group>
                    
                <Button variant="contained" id="signupButton"><strong>Sign In</strong></Button>
                <p>Don't have an account yet? <Button onClick={() => navigate("/register")}>Sign Up</Button></p>

            </div>
        </ThemeProvider>
    )
}

export default LoginForm