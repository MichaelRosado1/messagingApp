import React from 'react';


function Messages({ messages }) {
    return (
        <div>
            {messages === undefined ? 
             <p>nothing to show yet</p>
            : messages.map((message) => {
                <li>message: {message}</li>
            })}
        </div>
        
    )
}

export default Messages;