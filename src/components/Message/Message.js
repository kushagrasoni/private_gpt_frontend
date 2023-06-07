import React from 'react';
import { Paper, Typography } from '@mui/material';
import './Message.css';

const Message = (props) => {
    const { text, sender } = props;

    return (
        <Paper elevation={2}
               className={`message ${sender === 'user' ? 'user' : 'bot'}`}
               style={{ backgroundColor: sender === 'user' ? '#b7d9f1' : '#afe09e' }}
        >
            <Typography variant="body2">{text}</Typography>
        </Paper>
    );
};

export default Message;
