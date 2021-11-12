import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import Rating from '@mui/material/Rating';

const Product = (props) => {
    const { name, rating, image } = props.product;

    return (
        <Grid item xs={3} sm={3} md={3}>
            <Box sx={{ border: 0 }}>
                <Card sx={{ minWidth: 275, boxShadow: 0 }}>
                    <CardMedia
                        component="img"
                        style={{ width: 'auto', height: '200px', margin: '0 auto' }}
                        image={image}
                        alt={name}
                    />
                    <CardContent style={{ textAlign: 'start' }}>
                        <Typography variant="h5" component="div">
                            {name}
                        </Typography>
                        <Rating name="size-medium" defaultValue={rating} />
                        <br />
                        <Button style={{ backgroundColor: '#BD9200', color: 'white' }} variant="contained">Details</Button>
                    </CardContent>
                </Card>
            </Box>
        </Grid>
    );
};

export default Product;