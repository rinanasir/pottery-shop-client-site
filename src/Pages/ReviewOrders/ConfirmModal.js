import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ConfirmModal = ({ cart, openConfirm, handleConfirmClose }) => {
    const { user } = useAuth();
    const [confirmInfo, setConfirmInfo] = useState();
    // console.log(user.displayName, cart);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...confirmInfo };
        newInfo[field] = value;
        // console.log(newInfo);
        setConfirmInfo(newInfo);
    };

    const handleConfirmSubmit = e => {
        alert('Confirm submit');
        // collect data from the form
        // const appointment = {
        //     ...confirmInfo,
        //     time,
        //     serviceName: name,
        //     date: date.toLocaleDateString()
        // };
        // // console.log(appointment);

        // // send data to server
        // fetch('http://localhost:5000/appointments', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(appointment)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         // console.log(data);
        //         if (data.insertedId) {
        //             setBookingSuccess(true);
        //             handleBookingClose();
        //         }
        //     });

        handleConfirmClose();
        e.preventDefault();
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openConfirm}
            onClose={handleConfirmClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openConfirm}>
                <Box sx={style}>
                    <Typography style={{ color: '#BD9200', fontWeight: 'bold' }} id="transition-modal-title" variant="h6" component="h2">
                        Confirm Order
                    </Typography>
                    <form onSubmit={handleConfirmSubmit}>
                        <TextField
                            label="Name"
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="name"
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            size="small"
                        />
                        <TextField
                            label="Email"
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="email"
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                            size="small"
                        />
                        <TextField
                            label="Location"
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="location"
                            onBlur={handleOnBlur}
                            defaultValue=""
                            size="small"
                        />
                        <TextField
                            label="City"
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="City"
                            onBlur={handleOnBlur}
                            defaultValue=""
                            size="small"
                        />
                        <TextField
                            label="Phone Number"
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="phone"
                            onBlur={handleOnBlur}
                            defaultValue=""
                            size="small"
                        />
                        <Button sx={{ width: '30%', mt: 5 }} style={{ backgroundColor: '#BD9200', color: 'white', fontSize: 15, fontWeight: 'bold' }} type="submit" variant="contained">Submit</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default ConfirmModal;