import { Input, FormControl, InputLabel, Button } from '@material-ui/core';
import React from 'react';

function ChatArea() {

    return (
        <div>
            <FormControl>
                <InputLabel>Text</InputLabel>
                <Input />
                <Button variant="primary">Send</Button>
            </FormControl>
        </div>
    )
}

export default ChatArea; 