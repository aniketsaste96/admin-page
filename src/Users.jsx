// import '/users.css'
import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./users.css";
export function Users() {
  return (
    <div className="usersInput">
      <form>
        <input placeholder="Enter Name" /> <br />
        <input placeholder="Email" />
        <br />
        <input placeholder="Phone Number" />
        <br />
        <input placeholder="Address" />
        <br />
        <div className="userbutton">
          <Button variant="contained">Submit</Button>
        </div>
      </form>
    </div>
  );
}
