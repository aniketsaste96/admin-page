
import { Button, Typography, Box, makeStyles, Paper, IconButton, TableContainer, Table, TableBody, TableHead, TableCell, TableRow, Tooltip } from "@material-ui/core"
import { deepPurple, green, orange, blue } from '@material-ui/core/colors';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
const useStyles = makeStyles({
    headingColor: {
        backgroundColor: deepPurple[400],
        color: "white"
    },
    addStuColor: {
        backgroundColor: green[800],
        color: "white"
    },
    stuListColor: {
        backgroundColor: blue[800],
        color: "white"
    },
    tableHeadCell: {
        backgroundColor: "skyblue",
        color: "white"
    }
})
const ListUsers = () => {


    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getAllsetUsers() {
            try {
                const students = await axios.get("https://61c412cff1af4a0017d9927b.mockapi.io/users");
                setUsers(students.data)
                // console.log(students.data)

            } catch (error) {
                console.log("Opps something went wrong!!")

            }
        }
        getAllsetUsers();

    }, [])

















    //deleteting

    const handleDelete = async id => {
        await axios.delete(`https://61c412cff1af4a0017d9927b.mockapi.io/users/${id}`)

        //after deleting show remaining one
        var newusers = users.filter((item) => {
            return item.id !== id
        })
        setUsers(newusers);
    }








    const classes = useStyles();



    return (
        <>
            <Box textAlign="center" p={2} m={2} className={classes.stuListColor}>
                <Typography variant="h3">USER LIST</Typography>
            </Box>
            <TableContainer component={Paper} justify="center">
                <Table justify="center" >
                    <TableHead >
                        <TableRow style={{ backgroundColor: '#616161' }}>

                            <TableCell align="center" className={classes.tableHeadCell}>NO</TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>Name</TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>Email</TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>Phone</TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>Address</TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>Actions</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {
                            users.map((data, i) => {
                                return (
                                    <TableRow key={i}>
                                        <TableCell align="center">{i + 1}</TableCell>
                                        <TableCell align="center">{data.name}</TableCell>
                                        <TableCell align="center">{data.email}</TableCell>
                                        <TableCell align="center">{data.address}</TableCell>
                                        <TableCell align="center">{data.phone}</TableCell>
                                        <TableCell align="center">
                                            <Tooltip title="View">
                                                <IconButton>
                                                    <Link
                                                        to={`/userview/${data.id}`}

                                                    ><VisibilityIcon color="primary" />
                                                    </Link>
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Edit" >
                                                <IconButton>
                                                    <Link to={`/useredit/${data.id}`}>
                                                        <EditIcon color="green" />
                                                    </Link>
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Delete" >
                                                <IconButton onClick={() => handleDelete(data.id)}><Link ><DeleteIcon color="error" />
                                                </Link>
                                                </IconButton>
                                            </Tooltip>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }

                    </TableBody>
                </Table>


            </TableContainer>
        </>
    )
}

export default ListUsers
