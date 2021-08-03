import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'
import { useEffect, useState } from "react";

export const SidebarChat = ({id, name, addNewChat }) => {
    //displaying different avatar images for different people
    const [seed, setSeed] = useState('')
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])
     
    const createChat = () => {
        
    }
    //if it is not of !addNewChat then (?)
    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/b${seed}.svg`} />
            <div className="sidebarChat_info">
                <h2>{name}</h2>
                <p>Last message...</p>
            </div>
        </div>
    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add New Chat</h2>
        </div>
    )
}
