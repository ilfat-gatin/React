import { ChatList } from "../components/chatList/chatList"
import { MessageList } from "./../components/messageList/messageList"
import styles from "./../App.module.css"
import { Routes, Route } from "react-router-dom"

export const ChatPage = () => {
    return (
        <Routes>
            <Route 
                path="/"
                element={
                    <div>
                    <div className={styles.container}>
                        <div className={styles.wrapper}>
                            <ChatList/>
                            <h1>Выберите чат...</h1>
                        </div>      
                    </div>
                </div>
                }  
            />
            <Route
                path=":roomId"
                element={
                <div>
                    <div className={styles.container}>
                        <div className={styles.wrapper}>
                            <ChatList/>
                            <MessageList/>
                        </div>      
                    </div>
                </div>
                }
            />
        </Routes>
    )
    
    
}