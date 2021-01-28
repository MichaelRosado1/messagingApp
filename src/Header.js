import React, { useState } from 'react'


function Header() {
    const [user, setUser] = useState('Michael');
    const [pairedUser, setPairedUser] = useState('some other person');
    
    return (
        <div className="user-prompt">
            <h1>Hello, {user} </h1>
            <h3>You are currently chatting with {pairedUser}</h3>
            
        </div>
    )
}

export default Header
