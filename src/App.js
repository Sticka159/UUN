import "./frontend/CSS/registerStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";

import Register from "./frontend/register.jsx";
import Form from "./frontend/physicalForm.jsx";
import Login from "./frontend/loginForm.jsx";

import {BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom";

let theme = createTheme({
  palette: {
    primary: {
      main: "#c1ff72",
      dark: "#4d4d4d",
    },
    secondary: {
      main: "#ffffff",
      dark: "#000000"
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

function Home(){
  
  const navigate = useNavigate();
  
  return(
    <ThemeProvider theme={theme}>
      <div className="button">
        <Button variant="contained" id="signUpButton" onClick={() => navigate('/register')} ><strong>SIGN UP NOW</strong></Button><br/><br/>
        <Button variant="contained" id="loginButton" onClick={() => navigate('/login')} sx={{ backgroundColor: theme => theme.palette.primary.dark }}><strong>LOGIN</strong></Button>
      </div>
    </ThemeProvider>
  );
}

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/form" element={<Form/>}/>
        </Routes>
      </Router>
  );
}

export default App;
