// import '/users.css'
import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import CardHeader from "@mui/material/CardHeader";

import DeleteIcon from "@material-ui/icons/Delete";
import {
  Typography,
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
import "./products.css";
// import { ProductsData } from "./ProductsData.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getAllProducts() {
      try {
        const products = await axios.get(
          "https://61c412cff1af4a0017d9927b.mockapi.io/products"
        );
        setProducts(products.data);
      } catch (error) {
        console.log("Opps something went wrong!!");
      }
    }
    getAllProducts();
  }, []);

  //deleteting

  const handleDelete = async (id) => {
    await axios.delete(
      `https://61c412cff1af4a0017d9927b.mockapi.io/products/${id}`
    );

    //after deleting show remaining one
    var newProducts = products.filter((item) => {
      return item.id !== id;
    });
    setProducts(newProducts);
  };

  return (
    <>
      <div className="inputformproduct"></div>
      <div className="productsList">
        {products.map((item, i) => {
          return (
            <div className="productItems" key={i}>
              <h4>{item.title}</h4>
              <hr />
              <img src={item.image} alt="" />
              <hr />
              <p className="category">{item.category}</p>
              <p>
                <span className="priceDollar">$</span>{" "}
                <span className="priceNum">{item.price}</span>
              </p>

              <Tooltip title="View">
                <IconButton>
                  <Link to={`/view/${item.id}`}>
                    <VisibilityIcon color="primary" />
                  </Link>
                </IconButton>
              </Tooltip>
              <Tooltip title="Edit">
                <IconButton>
                  <Link to={`/edit/${item.id}`}>
                    <EditIcon color="green" />
                  </Link>
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton onClick={() => handleDelete(item.id)}>
                  <Link>
                    <DeleteIcon color="error" />
                  </Link>
                </IconButton>
              </Tooltip>
            </div>
          );
        })}
      </div>
    </>
  );
}
