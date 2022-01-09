import {
    Button,
    Typography,
    Box,
    makeStyles,
    TextField,
    Grid,
} from "@material-ui/core";
import { deepPurple, green, orange } from "@material-ui/core/colors";
import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
const useStyles = makeStyles({
    headingColor: {
        backgroundColor: deepPurple[400],
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

const EditUsers = () => {
    const { id } = useParams();
    const history = useHistory();

    const [users, setUsers] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    })
    useEffect(() => {
        async function getUsers() {
            try {
                const users = await axios.get(`https://61c412cff1af4a0017d9927b.mockapi.io/users/${id}`);
                setUsers(users.data)

            } catch (error) {
                console.log("Opps something went wrong!!")

            }
        }
        getUsers();

    }, [id])

    //instead of giving onchange event on all fields do this
    function ontextFieldChange(e) {
        //give this values to setStudent
        setUsers({
            //to avoid deleteting the previous values use spread operator
            ...users,
            [e.target.name]: e.target.value
            // look target.name  not value 
        })
        console.log(users);
    }


    //on update here put method with id
    async function onFormUpdate(e) {
        e.preventDefault();
        try {
            await axios.put(`https://61c412cff1af4a0017d9927b.mockapi.io/users/${id}`, users);
            history.push('/Users')
        } catch (error) {
            console.log("Opps something went wrong!!")
        }
    }




    const classes = useStyles();
    return (
        <>
            <Grid container justify="center" spacing={4}>
                <Grid item md={6} xs={12}>
                    <Box
                        textAlign="center"
                        m={2}
                        p={2}
                        className={classes.addStuColor}
                        mb={2}
                    >
                        <Typography variant="h4"> EDIT USER</Typography>
                    </Box>
                    <form noValidate>
                        <Grid container spacing={4} justify="center">
                            <Grid item xs={11} sm={11}>
                                <TextField
                                    autoComplete="name"
                                    name="name"
                                    varient="outlined"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    autoFocus
                                    value={users.name}
                                    onChange={(e) => ontextFieldChange(e)}
                                />
                            </Grid>
                            <Grid item xs={11} sm={11}>
                                <TextField
                                    autoComplete="email"
                                    name="email"
                                    varient="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="EMAIL Address"
                                    autoFocus
                                    value={users.email}
                                    onChange={(e) => ontextFieldChange(e)}
                                />
                            </Grid>
                            <Grid item xs={11} sm={11}>
                                <TextField
                                    autoComplete="phone"
                                    name="phone"
                                    varient="outlined"
                                    required
                                    fullWidth
                                    id="phone"
                                    label="Phone"
                                    autoFocus
                                    value={users.phone}
                                    onChange={(e) => ontextFieldChange(e)}
                                />
                            </Grid>
                            <Grid item xs={11} sm={11}>
                                <TextField
                                    autoComplete="address"
                                    name="address"
                                    varient="outlined"
                                    required
                                    fullWidth
                                    id="address"
                                    label="address"
                                    autoFocus
                                    value={users.address}
                                    onChange={(e) => ontextFieldChange(e)}
                                />
                            </Grid>
                        </Grid>
                        <Box m={3}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                onClick={(e) => onFormUpdate(e)}
                            >
                                Update
                            </Button>
                        </Box>
                        <Box m={3}>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                onClick={() => history.push("/Users")}
                            >
                                Back To Home
                            </Button>
                        </Box>
                    </form>
                </Grid>
            </Grid>
        </>
    );
};

export default EditUsers;
