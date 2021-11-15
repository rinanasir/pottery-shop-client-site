import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import Alert from '@mui/material/Alert';

const AddProduct = () => {
    const [productData, setProductData] = useState();
    const [addedSuccess, setAddedSuccess] = useState(false);

    const handleOnBlur = e => {
        const field = e.target.name;
        let value = e.target.value;
        const newProductData = { ...productData };
        newProductData[field] = value;
        // console.log(newProductData);
        setProductData(newProductData);
    };

    const handleProductSubmit = e => {
        // console.log(productData);
        fetch('https://arcane-shelf-64714.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setAddedSuccess(true);
                }
            })
        // alert('Product Added Successfully');
        e.preventDefault();
    }

    return (
        <Container>
            <Grid item sx={{ mt: 10, ml: 10 }} xs={12} md={6}>
                <Typography
                    style={{ color: '#BD9200', fontWeight: '600' }}
                    variant="h4"
                    gutterBottom component="div">
                    Add a Product
                </Typography>
                <form onSubmit={handleProductSubmit}>
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-basic"
                        label="Product Name"
                        type="text"
                        name="name"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-basic"
                        label="Price"
                        type="number"
                        name="price"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-basic"
                        label="Product Description"
                        type="text"
                        name="about"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-basic"
                        label="Rating"
                        type="number"
                        name="rating"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-basic"
                        label="Image URL"
                        type="text"
                        name="image"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <Button
                        type="submit"
                        sx={{ width: '75%', m: 1 }}
                        style={{ backgroundColor: '#BD9200', color: 'white', fontSize: 15, fontWeight: 'bold' }} variant="contained"
                    >Submit</Button>
                </form>
                {addedSuccess && <Alert sx={{ fontWeight: 'bold', fontSize: 15 }} severity="success">Product Added Successfully</Alert>}
            </Grid>
        </Container>
    );
};

export default AddProduct;