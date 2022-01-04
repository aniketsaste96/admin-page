// import '/users.css'
import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./users.css";
export function Product() {
  return (
    <div className="usersInput">
      <form>
        <input placeholder="Enter Product Name" /> <br />
        <input placeholder="Price" />
        <br />
        <input placeholder="Description" />
        <br />
        <div className="userbutton">
          <Button variant="contained">Submit</Button>
        </div>
      </form>
    </div>
  );
}
