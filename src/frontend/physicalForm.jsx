import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import Form from "react-bootstrap/Form";
import Button from "@mui/material/Button";
import * as React from "react";
import LevelSelecter from "./componentsPsysicalForm/levelSelect.jsx";
import WorkoutSelecter from "./componentsPsysicalForm/workoutSelect.jsx";

let theme = createTheme({
  palette: {
    primary: {
      main: "#c1ff72",
      dark: "#4d4d4d",
    },
    secondary: {
      main: "#ffffff",
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

const PhysicalForm = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="createAccount">
        <h1 className="header">Add your details</h1>
        <Form.Group className="mb-3" controlId="createAccountForm">
          <Form.Label>
            Weight:<span id="required">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="90 kg"
            className="mb-3"
            style={{ width: "300px" }}
          />
          <Form.Label>
            Height:<span id="required">*</span>
          </Form.Label>

          <Form.Control type="text" placeholder="185 cm" className="mb-3" />
          <div className="mb-3">
            Fitness level <span id="required">*</span>
            <LevelSelecter />
          </div>

          <div className="mb-3">
            Workout style <span id="required">*</span><br/>
            <WorkoutSelecter />
          </div>
          <p id="required">Required *</p>
        </Form.Group>

        <Button variant="contained" id="signupButton">
          <strong>Confirm</strong>
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default PhysicalForm;
