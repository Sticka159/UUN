import { ThemeProvider } from "@emotion/react";
import { createTheme } from '@mui/material/styles';
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { registerUser } from '../services/authService'; // Import register service

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

const RegisterForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await registerUser(formData);
            // Handle successful registration, navigate or show success message
            console.log(data.message);
            navigate('/login');
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
                <h1 className="header">Create Your Account</h1>
                <Form.Group className="mb-3" controlId="registerForm">
                    <Form.Label>Name:<span id="required">*</span></Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Johnny Smith"
                        className="mb-3"
                        style={{ width: "300px" }}
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <Form.Label>Email Address:<span id="required">*</span></Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="johnny.smith@gmail.com"
                        className="mb-3"
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
                    <Form.Label>Confirm Password:<span id="required">*</span></Form.Label>
                    <Form.Control
                        type="password"
                        name="confirmPassword"
                        className="mb-3"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    <p id="required">Required *</p>
                </Form.Group>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <Button variant="contained" id="signupButton" onClick={handleSubmit}>
                    <strong>Sign Up</strong>
                </Button>
                <p>Already Have an Account? <Button onClick={() => navigate("/login")}>Log In</Button></p>
            </div>
        </ThemeProvider>
    );
};

export default RegisterForm;