import React, { useState, useEffect } from 'react';


function Messages({ messages }) {
    const [currentMessages, setcurrentMessages] = useState(['hello', 'hey, whats up', 'nothing much!']);

    return (
        <div>
            <ul>
                {
                    currentMessages.map((message) => {
                        return (
                            <li key="">{message}</li>
                        )
                    })
                }
            </ul>
        </div>
        
    )
}

export default Messages;