import React, {useState} from 'react';
import {Paper, Typography, TextField, Button} from '@mui/material';
import axios from 'axios';
import Message from "../Message/Message";
import "./Chat.css";

const Chat = () => {
    const [inputText, setInputText] = useState('');
    const [messages, setMessages] = useState([]);

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleInputKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleSubmit = async () => {
        const userInputMessage = {text: inputText, sender: 'user'};
        setMessages((prevMessages) => [...prevMessages, userInputMessage]);

        try {
            const response = await axios.get('http://localhost:5000/pvt_gpt', {
                params: {query: inputText},
            });
            console.log(response)
            const botReplyMessage = {text: response.data.reply, sender: 'bot'};
            setMessages((prevMessages) => [...prevMessages, botReplyMessage]);
        } catch (error) {
            console.error(error);
            // Handle error response
        }

        setInputText('');
    };

    return (
        <Paper elevation={3} className="chat-container">
            <div className="message-container">
                {messages.map((message, index) => (
                    <Message key={index}
                             sender={message.sender}
                             text={message.text}
                             className={`message ${message.sender === 'user' ? 'left' : 'right'}`}
                    />
                ))}
            </div>
            <div className="input-container">
                <TextField
                    label="Type your message"
                    variant="outlined"
                    value={inputText}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                />
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </div>
        </Paper>
    );
};

export default Chat;

// import React, { useState } from 'react';
// import { Paper, Typography, TextField, Button } from '@mui/material';
// import Message from "../Message/Message";
// import "./Chat.css";
//
//
// const Chat = (props) => {
//     const [inputText, setInputText] = useState('');
//     const messages = props.messages;
//     const onSendMessage = props.onSendMessage;
//
//     const handleInputChange = (event) => {
//         setInputText(event.target.value);
//     };
//
//     const handleSubmit = async () => {
//         if (inputText.trim() === '') return;
//         onSendMessage(inputText);
//
//         setInputText('');
//     };
//
//     return (
//         <Paper elevation={3} className="chat-container">
//             <div className="message-container">
//                 {messages.map((message, index) => (
//                     <Message
//                         key={index}
//                         text={message.text}
//                         sender={message.sender}
//                         className={message.sender === 'You' ? 'sent' : 'received'}
//                     />
//                 ))}
//             </div>
//             <div className="input-container">
//                 <TextField
//                     label="Type your message"
//                     variant="outlined"
//                     value={inputText}
//                     onChange={handleInputChange}
//                 />
//                 <Button variant="contained" color="primary" onClick={handleSubmit}>
//                     Submit
//                 </Button>
//             </div>
//         </Paper>
//     );
// };
//
// export default Chat;
