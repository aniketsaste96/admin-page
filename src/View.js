import { Link, useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import './view.css'
import { Button, Typography, Box, makeStyles, Paper, IconButton, TableContainer, Table, TableBody, TableHead, TableCell, TableRow, Tooltip } from "@material-ui/core"
import { useState, useEffect } from 'react';
function View() {
    const history = useHistory()
    const { id } = useParams()

    const [product, setProducts] = useState([])


    useEffect(() => {

        getAllProducts();
    }, [id]);
    async function getAllProducts() {
        try {
            const products = await axios.get(
                ` https://61c412cff1af4a0017d9927b.mockapi.io/products/${id}`
            );
            setProducts(products.data);
        } catch (error) {
            console.log("Opps something went wrong!!");
        }
    }

    return (
        <>
            <div className="productItemsView" key={id}>
                <h2>{product.title}</h2>
                <img src={product.image} alt="" />
                <p>{product.description}</p>
                <p className="category">{product.category}</p>
                <p className="priceBAR"> <span className="price"> $ </span> <span class="productPrice">{product.price}</span>  </p>
                <Button onClick={() => history.push("/Product")} color="primary" variant="contained"> Back to Products</Button>
                <Button color="success" variant="contained">Buy Now</Button>
            </div>

        </>
    )
}

export default View;
