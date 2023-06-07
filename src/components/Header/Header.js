import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import cgi_logo from "../../assets/logos/CGI_logo_color_rgb.svg";

const Header = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: 'primary.main' }}>
            <Toolbar className="header">
                <div className="header-logo">
                    <img src={cgi_logo}
                         alt="Logo"
                         className="logo-image"
                         style={{ height: 40, width: 70 }}
                    />
                </div>
                <Typography variant="h5" sx={{ flexGrow: 1, textAlign: 'center' }}>
                    Welcome to CGI's Private GPT
                </Typography>
                {/*<div>*/}
                {/*    <a href="/" className="header-link">Home</a>*/}
                {/*    <a href="/about" className="header-link">About</a>*/}
                {/*    /!* Add more links as needed *!/*/}
                {/*</div>*/}
            </Toolbar>
        </AppBar>

    );
};

export default Header;
