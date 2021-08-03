import React from 'react'
import { useEffect, useState } from "react";
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import InsertEmoticon from '@material-ui/icons/InsertEmoticon'
import { AttachFile, Avatar, IconButton } from '@material-ui/core'
import MicIcon from '@material-ui/icons/Mic'

import './Chat.css'
const Chat = () => {
    const [seed, setSeed] = useState('')
    const [input, setInput] = useState('')
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])
    const sendMessage = e => {
        e.preventDefault()
        setInput('')
    }
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/b${seed}.svg`} />
                <div className="chat_headerInfo">
                    <h3>Oyunge</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton >
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">
                {/* ?? */}
                <p className={`chat_message ${true && 'chat_receiver'}`}>
                    <span className="chat_name">Oyunge</span>
                    Hey Developers
                    <span className="chat_timestamp">
                        {new Date().toLocaleTimeString()}
                    </span>
                </p>
                <p className="chat_message">
                    <span className="chat_name">Abdallah</span>
                    Hey Developers
                    <span className="chat_timestamp">
                        {new Date().toLocaleTimeString()}
                    </span>
                </p>
            </div>
            <div className="chat_footer">
                <InsertEmoticon />
                <form>
                    <input
                        value={input}
                        onChange={e=> setInput(e.target.value)}
                        placeholder="Type a message"
                        type="text"
                    />
                    <button onClick={sendMessage} type="submit" >Send a message</button>
                    <MicIcon />
                </form>
            </div>
        </div>
    )
}

export default Chat
