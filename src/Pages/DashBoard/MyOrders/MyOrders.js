import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Paper from '@mui/material/Paper';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/orders?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);
    console.log(orders);

    return (
        <Box container>
            <Typography sx={{ color: '#BD9200', fontWeight: 'bold' }} variant="h4" color="text.secondary">
                My Orders
            </Typography>
            <TableContainer component={Paper}>
                <Table aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Customer Name</TableCell>
                            <TableCell align="right">Location</TableCell>
                            <TableCell align="right">City</TableCell>
                            <TableCell align="right">Phone Number</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.userName}
                                </TableCell>
                                <TableCell align="right">{row.location}</TableCell>
                                <TableCell align="right">{row.City}</TableCell>
                                <TableCell align="right">{row.phone}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default MyOrders;