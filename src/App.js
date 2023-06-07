import React, {useState} from 'react';
import {Container, CssBaseline, Paper, Typography} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Header from './components/Header/Header';
import Chat from './components/Chat/Chat';
import SwitchButton from './components/SwitchButton/SwitchButton';
import Terminal from './components/Terminal/Terminal';
import './App.css';

// Define the theme`
const theme = createTheme({
    palette: {
        primary: {
            main: '#2196f3',
        },
        secondary: {
            main: '#f44336',
        },
    },
});

const App = () => {
    const [activeModel, setActiveModel] = useState('Model 1');

    const [messages, setMessages] = useState([]);

    const handleNewMessage = (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    const handleToggle = () => {
        setActiveModel((prevModel) => (prevModel === 'Model 1' ? 'Model 2' : 'Model 1'));
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Paper elevation={3}>
                <Container maxWidth="lg" className="app-container">
                    <Header/>
                    <SwitchButton activeModel={activeModel} handleToggle={handleToggle}/>
                    <div className="content-container">
                        <Chat handleNewMessage={handleNewMessage}/>
                        <Terminal messages={messages}/>
                    </div>
                </Container>
            </Paper>
        </ThemeProvider>
    );
};

export default App;
