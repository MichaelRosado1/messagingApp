import { Input, FormControl, InputLabel, Button } from '@material-ui/core';
import Messages from './Messages';
import React, { useState } from 'react';


function ChatArea() {
    const [userInput, setUserInput] = useState('');
    const [userMessages, setUserMessages] = useState([]);

    const postMessage = () => {
        setUserMessages([...userMessages, userInput]);
        setUserInput('');
    }

    return (
        <div>
            <Messages messages={userMessages} />
            <FormControl>
                <InputLabel>Text</InputLabel>
                <Input value={userInput} onChange={e => setUserInput(e.target.value)} />
                <Button onClick={postMessage} variant="primary">Send</Button>
            </FormControl>
        </div>
    )
}

export default ChatArea; 