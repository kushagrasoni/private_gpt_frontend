// Terminal.js
import React, {useEffect, useRef} from 'react';
import './Terminal.css';
import {Typography} from "@mui/material";

const Terminal = ( { messages  }) => {
    const terminalContainerRef = useRef(null);

    useEffect(() => {
        // Scroll to the bottom of the Terminal container when new messages are added
        terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
    }, [messages]);

    return (
        <div className="terminal-container"  ref={terminalContainerRef}>
            <Typography variant="h5" className="terminal-header">Terminal</Typography>
            <div className="terminal-body" contentEditable={false}>
                {messages.map((message, index) => (
                    <div key={index} className="terminal-message">
                        {message.sender === 'user' ? (
                            <span className="terminal-user">
                                User:<br />
                                {message.text}
                            </span>
                        ) : (
                            <span className="terminal-bot">
                                Bot:<br />
                                {message.text}</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Terminal;
