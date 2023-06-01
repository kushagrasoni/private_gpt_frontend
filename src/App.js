import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Chat from './components/Chat/Chat';
import Message from './components/Message/Message';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Chat>
                <Message sender="user" text="Hello!" />
                <Message sender="bot" text="Hi there! How can I assist you today?" />
                {/* Add more Message components as needed */}
            </Chat>
        </div>
    );
};

export default App;


// import React, { useState } from 'react';
// import './App.css';
// import Header from './components/Header/Header';
// import Chat from './components/Chat/Chat';
// import axios from "axios";
//
// function App() {
//     const [messages, setMessages] = useState([]);
//
//     const handleSendMessage = async (message) => {
//         setMessages([...messages, {text: message, sender: 'You'}]);
//
//         try {
//             const response = await axios.get('http://localhost:8000/pvt_gpt/', {
//                 params: {query: message},
//             });
//
//             const botReplyMessage = {text: response.data.reply, sender: 'bot'};
//             setMessages((prevMessages) => [...prevMessages, botReplyMessage]);
//         } catch (error) {
//             console.error(error);
//             // Handle error response
//         }
//     };
//
//     return (
//         <div className="App">
//             <Header title="Welcome to Private GPT" />
//             <Chat messages={messages} onSendMessage={handleSendMessage} />
//         </div>
//     );
// }
//
// export default App;
