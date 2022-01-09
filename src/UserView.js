import {
    Button,
    Typography,
    Box,
    makeStyles,
    Paper,
    IconButton,
    TableContainer,
    Table,
    TableBody,
    TableHead,
    TableCell,
    TableRow,
    Tooltip,
} from "@material-ui/core";
import { deepPurple, green, orange, purple } from "@material-ui/core/colors";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const useStyles = makeStyles({
    headingColor: {
        backgroundColor: deepPurple[400],
        color: "white",
    },
    addStuColor: {
        backgroundColor: green[900],
        color: "white",
    },
    stuListColor: {
        backgroundColor: purple[800],
        color: "white",
    },
    tableHeadCell: {
        backgroundColor: "skyblue",
        color: "white",
    },
});

const View = () => {
    const history = useHistory();
    const { id } = useParams();
    const [users, setUsers] = useState([])//[] imp
    useEffect(() => {
        async function getStudent() {
            try {
                const user = await axios.get(`https://61c412cff1af4a0017d9927b.mockapi.io/users/${id}`);
                setUsers(user.data)
                // console.log(student.data)

            } catch (error) {
                console.log("Opps something went wrong!!")

            }
        }
        getStudent();

    }, [id])




    const classes = useStyles();

    return (
        <>
            <Box textAlign="center" p={2} m={2} className={classes.stuListColor}>
                <Typography variant="h4">STUDENT LIST</Typography>
            </Box>
            <TableContainer component={Paper} justify="center">
                <Table justify="center">
                    <TableHead>
                        <TableRow style={{ backgroundColor: "#616161" }}>
                            <TableCell align="center" className={classes.tableHeadCell}>
                                NAME
                            </TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>
                                EMAIL
                            </TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>
                                PHONE
                            </TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>
                                ADDRESS
                            </TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="center">{users.name}</TableCell>
                            <TableCell align="center">{users.email}</TableCell>
                            <TableCell align="center">{users.phone}</TableCell>
                            <TableCell align="center">{users.address}</TableCell>



                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Box m={3}>
                <Button onClick={() => history.push('/Users')} type="submit" variant="contained" color="primary" fullWidth>
                    Back To Home
                </Button>
            </Box>
        </>
    );
};

export default View;
