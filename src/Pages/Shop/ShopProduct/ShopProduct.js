import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import Rating from '@mui/material/Rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const ShopProduct = (props) => {
    const { _id, name, rating, price, image } = props.product;

    const dollarIcon = <FontAwesomeIcon icon={faDollarSign} />
    const infoIcon = <FontAwesomeIcon icon={faInfoCircle} />

    return (
        <Grid item xs={4} sm={4} md={4}>
            <Box sx={{ border: 0 }}>
                <Card sx={{ minWidth: 275 }}>
                    <CardMedia
                        component="img"
                        style={{ width: 'auto', height: '200px', margin: '0 auto' }}
                        image={image}
                        alt=""
                    />
                    <CardContent>
                        <Typography sx={{ fontWeight: 'bold' }} variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography sx={{ fontWeight: 'bold', color: 'red' }} variant="h6" component="div">
                            {dollarIcon} {price}
                        </Typography>
                        <Rating readOnly name="size-medium" defaultValue={rating} />
                        <br />
                        <NavLink style={{ textDecoration: 'none' }} to={`/productdetails/${_id}`}>
                            <Button style={{ backgroundColor: '#BD9200', color: 'white' }} variant="contained">{infoIcon}_Details</Button>
                        </NavLink>
                    </CardContent>
                </Card>
            </Box>
        </Grid>
    );
};

export default ShopProduct;