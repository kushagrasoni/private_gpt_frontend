import React from 'react';
import { Paper, Typography } from '@mui/material';

const Message = (props) => {
    const { text, sender } = props;

    return (
        <Paper elevation={2} className={`message-container ${sender === 'user' ? 'user' : 'bot'}`}>
            <Typography variant="body2">{text}</Typography>
        </Paper>
    );
};

export default Message;


// import React from 'react';
// import { Paper, Typography } from '@mui/material';
//
//
// const Message = (props) => {
//     const text = props.text;
//     const sender = props.sender;
//
//     const isSentByUser = sender === 'You';
//     const messageClass = isSentByUser ? 'sent' : 'received';
//
//     return (
//         <div className={`message ${messageClass}`}>
//             <Paper className="message-paper" elevation={3}>
//                 <Typography variant="subtitle1" className="message-label">
//                     {isSentByUser ? 'You:' : 'Response:'}
//                 </Typography>
//                 <Typography variant="body1" className="message-text">
//                     {text}
//                 </Typography>
//             </Paper>
//         </div>
//     );
// };
//
// export default Message;
