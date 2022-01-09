import { Button, Typography, Box, makeStyles, TextField, Grid } from "@material-ui/core"
import { deepPurple, green, orange } from '@material-ui/core/colors';
import axios from 'axios';
import { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const AddProduct = () => {

    const history = useHistory();

    const [product, setproduct] = useState({
        title: "",
        image: "",
        price: "",
        category: "",
        category: ""


    });

    //after post rerender home

    const [status, setStatus] = useState()




    //instead of giving onchange event on all fields do this
    function ontextFieldChange(e) {
        //give this values to setStudent
        setproduct({
            //to avoid deleteting the previous values use spread operator
            ...product,
            [e.target.name]: e.target.value

        })
        console.log(product);
    }

    async function onFormSubmit(e) {
        e.preventDefault();

        try {
            await axios.post(`https://61c412cff1af4a0017d9927b.mockapi.io/products`, product);


            setStatus(true)

        } catch (error) {
            console.log("Opps something went wrong!!")


        }
    }

    // return Product if status is true
    if (status) {
        history.push("/Product")
    }
    return (
        <div>
            <Box textAlign="center"  >
                <Typography variant="h4"> ADD Product</Typography>
            </Box>
            <form noValidate >
                <Grid container spacing={4} justify="center">


                    <Grid m={2} mb={2} item xs={4} sm={4}>
                        <TextField
                            onChange={(e) => ontextFieldChange(e)}
                            autoComplete="title" name="title"
                            varient="outlined" required fullWidth id="title"
                            label="title" autoFocus />

                    </Grid>
                    <Grid item xs={4} sm={4}>
                        <TextField

                            onChange={(e) => ontextFieldChange(e)}
                            autoComplete="image" name="image"
                            varient="outlined" required fullWidth id="image"
                            label="image" autoFocus />

                    </Grid>
                    <Grid item xs={4} sm={4}>
                        <TextField

                            onChange={(e) => ontextFieldChange(e)}
                            autoComplete="price" name="price"
                            varient="outlined" required fullWidth id="price"
                            label="$ price" autoFocus />

                    </Grid>
                    <Grid item xs={4} sm={4}>
                        <TextField

                            onChange={(e) => ontextFieldChange(e)}
                            autoComplete="category" name="category"
                            varient="outlined" required fullWidth id="category"
                            label="category" autoFocus />

                    </Grid>
                    <Grid item xs={4} sm={4}>
                        <TextField

                            onChange={(e) => ontextFieldChange(e)}
                            autoComplete="description" name="description"
                            varient="outlined" required fullWidth id="description"
                            label="Add description" autoFocus />

                    </Grid>


                </Grid>
                <Box m={8}>
                    <Button type="submit" variant="contained" color="primary" fullWidth onClick={(e) => onFormSubmit(e)}>Add Product</Button>
                </Box>

            </form>
        </div>
    )
}

export default AddProduct
