import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    const featherIcon = <FontAwesomeIcon icon={faFeatherAlt} />
    return (
        <div>
            <footer>
                <Typography variant="h6" sx={{ backgroundColor: '#BD9200', fontSize: 20, fontWeight: 'bold', lineHeight: '80px', mt: 5 }}>
                    © Copyright 2021 | All rights reserved. {featherIcon} Clayware
                </Typography>
            </footer>
        </div>
    );
};

export default Footer;