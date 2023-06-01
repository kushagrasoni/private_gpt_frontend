// import React from 'react';
// import { AppBar, Toolbar, Typography } from '@mui/material';
// import "./Header.css";
//
// const Header = () => {
//     return (
//         <AppBar position="static">
//             <Toolbar>
//                 <Typography variant="h5">Welcome to CGI's Private GPT</Typography>
//             </Toolbar>
//         </AppBar>
//     );
// };
//
// export default Header;


import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import "./Header.css";

const Header = () => {
    return (
        <AppBar position="static" className="header">
            <Toolbar>
                <Box display="flex" alignItems="center" width="100%">
                    <Typography variant="h5" className="header-logo">Welcome to CGI's Private GPT</Typography>
                    <Box marginLeft="auto">
                        <nav>
                            <a className="header-link" href="#home">Home</a>
                            <a className="header-link" href="#about">About</a>
                            <a className="header-link" href="#contact">Contact</a>
                        </nav>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;



