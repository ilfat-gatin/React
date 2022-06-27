import List from '@mui/material/List';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Chat } from './chat/chat';
import styles from "./chatList.module.css"
import { Link, useParams } from 'react-router-dom';

export function ChatList() {

    const [chats] = useState(["room1", "room2", "room3"])

    const { roomId } = useParams()

    return(
        <List className={styles.wrapper}>
            {chats.map((chat) => (
                <Link key={nanoid()} to={`/chat/${chat}`}>
                <Chat name={chat} selected={roomId === chat} />
                </Link>
            ))}
        </List>
    )
      

}