import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const MyOrders = () => {
    return (
        <Box container>
            <Typography sx={{ fontWeight: 'bold', fontSize: 20 }} variant="subtitle1" color="text.secondary">
                My Orders
            </Typography>
        </Box>
    );
};

export default MyOrders;