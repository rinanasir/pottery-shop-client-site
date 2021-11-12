import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherAlt, faShoppingBag, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

const Navigation = () => {
    const featherIcon = <FontAwesomeIcon icon={faFeatherAlt} />
    const loginIcon = <FontAwesomeIcon icon={faSignInAlt} />
    const bagIcon = <FontAwesomeIcon icon={faShoppingBag} />
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ backgroundColor: '#BD9200' }} position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <Typography style={{ textAlign: 'left' }} variant="h3" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                        {featherIcon}Clayware
                    </Typography>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/home">
                        <Button style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }} title="Home" color="inherit"><HomeIcon /></Button>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/shop">
                        <Button style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }} title="Shop" color="inherit">{bagIcon}</Button>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/login">
                        <Button style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }} title="Login" color="inherit">{loginIcon}</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;