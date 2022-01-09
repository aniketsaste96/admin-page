import { Button, Typography, Box, makeStyles, TextField, Grid } from "@material-ui/core"
import { deepPurple, green, orange } from '@material-ui/core/colors';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const EditProduct = () => {
    const { id } = useParams();

    const history = useHistory();

    const [product, setproduct] = useState({
        title: "",
        image: "",
        price: "",
        category: ""


    });



    useEffect(() => {
        async function getProduct() {
            try {
                const product = await axios.get(`https://61c412cff1af4a0017d9927b.mockapi.io/products/${id}`);
                setproduct(product.data)

            } catch (error) {
                console.log("Opps something went wrong!!")

            }
        }
        getProduct();

    }, [id])

    //instead of giving onchange event on all fields do this
    function ontextFieldChange(e) {
        //give this values to setStudent
        setproduct({
            //to avoid deleteting the previous values use spread operator
            ...product,
            [e.target.name]: e.target.value
            // look target.name  not value 
        })
        console.log(product);
    }


    //on update here put method with id
    async function onFormUpdate(e) {
        e.preventDefault();
        try {
            await axios.put(`https://61c412cff1af4a0017d9927b.mockapi.io/products/${id}`, product);
            history.push('/Product')
        } catch (error) {
            console.log("Opps something went wrong!!")
        }

    }

    // return Home if status is true

    return (
        <div>
            <Box textAlign="center" m={2} p={2} mb={2} >
                <Typography variant="h4"> Edit Product</Typography>
            </Box>
            <form noValidate >
                <Grid container spacing={4} justify="center">


                    <Grid m={2} mb={2} item xs={6} sm={6}>
                        <TextField
                            onChange={(e) => ontextFieldChange(e)}
                            autoComplete="title" name="title"
                            varient="outlined" required fullWidth id="title"
                            label="title" autoFocus
                            value={product.title}
                        />

                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <TextField
                            //  onChnage={ontextFieldChange} == no cz it calles emmediatly
                            onChange={(e) => ontextFieldChange(e)}
                            autoComplete="image" name="image"
                            varient="outlined" required fullWidth id="image"
                            label="image" autoFocus
                            value={product.image} />

                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <TextField
                            //  onChnage={ontextFieldChange} == no cz it calles emmediatly
                            onChange={(e) => ontextFieldChange(e)}
                            autoComplete="price" name="price"
                            varient="outlined" required fullWidth id="price"
                            label="$ price" autoFocus
                            value={product.price} />

                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <TextField
                            //  onChnage={ontextFieldChange} == no cz it calles emmediatly
                            onChange={(e) => ontextFieldChange(e)}
                            autoComplete="category" name="category"
                            varient="outlined" required fullWidth id="category"
                            label="category" autoFocus
                            value={product.category} />

                    </Grid>


                </Grid>
                <Box m={3}>
                    <Button type="submit" variant="contained" color="primary" fullWidth onClick={(e) => onFormUpdate(e)}>Update</Button>
                </Box>


            </form>
        </div >
    )
}

export default EditProduct
