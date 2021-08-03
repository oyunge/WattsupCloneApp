import React from 'react'
import './Sidebar.css'
import { Avatar, IconButton } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { SearchOutlined } from '@material-ui/icons'
import { useEffect, useState } from "react";

import db from '../firebase' 
import { SidebarChat } from './SidebarChat'
const Sidebar = () => {
    const [rooms, setRooms] = useState([])
    useEffect(() => {
      db.collection('rooms').onSnapshot(snapshot => (
          setRooms(snapshot.docs.map(doc =>(
              {
                  id:doc.id,
                  data:doc.data()
              }
          )))
      ))
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar />
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined />
                    <input placeholder="search or start new chat" type="text" />
                </div>
            </div>
            <div className="sidebar_chats">
                <SidebarChat addNewChat/>
                {rooms.map(room => <SidebarChat key={room.id} id={room.id} name={room.data.name}/>)}

            </div>

        </div>
    )
}

export default Sidebar
