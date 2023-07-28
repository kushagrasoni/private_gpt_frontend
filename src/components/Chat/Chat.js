import React, {useEffect, useRef, useState} from 'react';
import { Paper, TextField, Button } from '@mui/material';
import Message from '../Message/Message';
import './Chat.css';
import axios from "axios";

const Chat = ({ handleNewMessage } ) => {
    const [inputText, setInputText] = useState('');
    const [messages, setMessages] = useState([]);
    const chatContainerRef = useRef(null);
    const messageContainerRef = useRef(null);


    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleInputKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleSubmit = async () => {
        const userMessage = {text: inputText, sender: 'user'};
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInputText('');

        // Send user message to Terminal component
        handleNewMessage(userMessage);

        if (inputText !== '') {
            try {
                // Use the Public IP of the Instance
                const response = await axios.get('http://172.31.27.119:5000/pvt_gpt',
                    {params: {query: inputText},
                        timeout: 10000000,
                        headers: {
                            'Access-Control-Allow-Origin': '*', // Set the Access-Control-Allow-Origin header
                            'Content-Type': 'application/json',
                        }
                });

                const botMessage = {text: response.data.reply, sender: 'bot'};
                setMessages((prevMessages) => [...prevMessages, botMessage]);

                // Send bot response to Terminal component
                handleNewMessage(botMessage);
            } catch (error) {
                console.error(error);
                // Handle error response
            }
        }
    };

    useEffect(() => {
        // Scroll to the bottom of the chat container when new messages are added
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }, [messages]);


    return (
        <Paper elevation={3} className="chat-container" ref={chatContainerRef}>
            <div className="message-container" ref={messageContainerRef}>
                {messages.map((message, index) => (
                    <Message key={index} sender={message.sender} text={message.text} />
                ))}
            </div>
            <div className="input-container">
                <TextField
                    label="Type your message"
                    variant="outlined"
                    value={inputText}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    className="input-field"
                />
                <Button variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                >
                    Submit
                </Button>
            </div>
        </Paper>
    );
};

export default Chat;
