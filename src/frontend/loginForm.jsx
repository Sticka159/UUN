import { ThemeProvider } from "@emotion/react";
import { createTheme } from '@mui/material/styles';
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { loginUser } from '../services/authService'; // Import login service

let theme = createTheme({
    palette: {
        primary: { main: '#c1ff72', dark: "#4d4d4d" },
        secondary: { main: '#ffffff' },
    },
});

theme = createTheme(theme, {
    palette: {
        info: { main: theme.palette.secondary.main },
    },
});

const LoginForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await loginUser(formData);
            // Handle successful login, store token or navigate
            console.log(data.message);
            navigate('/dashboard');
        } catch (err) {
            setError(err.error || 'An error occurred');
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <div className="createAccount">
                <button id="arrowLeft">
                    <Icon path={mdiArrowLeft} size={3} onClick={() => navigate("/")} />
                </button>
                <h1 className="header">Login To Your Account</h1>
                <Form.Group className="mb-3" controlId="loginForm">
                    <Form.Label>Email Address:<span id="required">*</span></Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="johnny.smith@gmail.com"
                        className="mb-3"
                        style={{ width: "300px" }}
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <Form.Label>Password:<span id="required">*</span></Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        className="mb-3"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <p id="required">Required *</p>
                </Form.Group>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <Button variant="contained" id="signupButton" onClick={handleSubmit}>
                    <strong>Sign In</strong>
                </Button>
                <p>Don't have an account yet? <Button onClick={() => navigate("/register")}>Sign Up</Button></p>
            </div>
        </ThemeProvider>
    );
};

export default LoginForm;