import {
  Button,
  Typography,
  Box,
  makeStyles,
  TextField,
  Grid,
} from "@material-ui/core";
import { deepPurple, green, orange } from "@material-ui/core/colors";
import ListUsers from "./ListUsers.js";
import axios from "axios";
import { useState } from "react";
const useStyles = makeStyles({
  headingColor: {
    backgroundColor: deepPurple[900],
    color: "white",
  },
  addStuColor: {
    backgroundColor: green[400],
    color: "white",
  },
  stuListColor: {
    backgroundColor: orange[400],
    color: "white",
  },
  tableHeadCell: {
    backgroundColor: "skyblue",
    color: "white",
  },
});

const Users = () => {
  const classes = useStyles();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [status, setStatus] = useState();

  function ontextFieldChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    console.log(user);
  }

  async function onFormSubmit(e) {
    e.preventDefault();

    try {
      await axios.post(
        `https://61c412cff1af4a0017d9927b.mockapi.io/users/`,
        user
      );

      setStatus(true);
    } catch (error) {
      console.log("Opps something went wrong!!");
    }
  }

  if (status) {
    return <Users />;
  }

  return (
    <>
      <Box textAlign="center" className={classes.headingColor}>
        <Typography variant="h2">USERS PROFILE</Typography>
      </Box>
      <Grid container justify="center" spacing={4}>
        <Grid item md={4} xs={12}>
          <Box
            textAlign="center"
            m={2}
            p={2}
            className={classes.addStuColor}
            mb={2}
          >
            <Typography variant="h4"> ADD User</Typography>
          </Box>
          <form noValidate>
            <Grid container spacing={4} justify="center">
              <Grid item xs={11} sm={11}>
                <TextField
                  onChange={(e) => ontextFieldChange(e)}
                  autoComplete="stuname"
                  name="stuname"
                  varient="outlined"
                  required
                  fullWidth
                  id="stuname"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={11} sm={11}>
                <TextField
                  //  onChnage={ontextFieldChange} == no cz it calles emmediatly
                  onChange={(e) => ontextFieldChange(e)}
                  autoComplete="email"
                  name="email"
                  varient="outlined"
                  required
                  fullWidth
                  id="email"
                  label="EMAIL Address"
                  autoFocus
                />
              </Grid>
              <Grid item xs={11} sm={11}>
                <TextField
                  onChange={(e) => ontextFieldChange(e)}
                  autoComplete="phone"
                  name="phone"
                  varient="outlined"
                  required
                  fullWidth
                  id="phone"
                  label="Phone"
                  autoFocus
                />
              </Grid>
              <Grid item xs={11} sm={11}>
                <TextField
                  onChange={(e) => ontextFieldChange(e)}
                  autoComplete="address"
                  name="address"
                  varient="outlined"
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  autoFocus
                />
              </Grid>
            </Grid>
            <Box m={3}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                onClick={(e) => onFormSubmit(e)}
              >
                Add
              </Button>
            </Box>
          </form>
        </Grid>

        <Grid item md={8} xs={12}>
          <ListUsers />
        </Grid>
      </Grid>
    </>
  );
};

export default Users;
