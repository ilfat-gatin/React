import { Message } from "./message/message"
import React, { useEffect, useState, useRef, useCallback } from "react"
import { TextField, Button } from "@mui/material"
import styles from "./messageList.module.css"
import { nanoid } from "nanoid"
import { useParams } from "react-router-dom"


export function MessageList() {

  const { roomId } = useParams()

  const [messageList, setMessageList] = useState({
    roomId: {}
  })

  const [author, setAuthor] = useState('')

  const [text, setText] = useState('')

  const ref = useRef() 

  useEffect(() => {
    ref.current?.focus()
  }, [])

  const scrollRef = useRef()
 
  const setMessages = useCallback((text, author) => {
    setMessageList((state) => ({
      ...state, 
      [roomId]:[
      ...(state[roomId] ?? []),
      {author: author, text: text, date: new Date().toLocaleString()}
      ]}))
  }, [roomId])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight)
    }
  }, [messageList])

  useEffect(()=>{       
    let timerId = null
    const messages = messageList[roomId] ?? []
    
    if (messages.length > 0 && messages[messages.length-1].author !== "Robot") {
        timerId = setTimeout(() => {
          setMessages(`Welcome, ${author || "nameless man"}!`, "Robot")
        }, 1500)
    }
    
    return () => {
      clearInterval(timerId)
    }
  }, [setMessages, author, roomId, messageList])


  const addNewMessage = () => {
    if (text){
      setMessages(text, author)
    }    
  }

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      addNewMessage();
    }
  };
   
  const messages = messageList[roomId] ?? []

    return (
        <div className={styles.wrapper}>
          <div className={styles.messages} ref={scrollRef}>
            {messages.map( (message, index) => {
            return <Message author={message.author} text={message.text} date={message.date} key={nanoid()}/>
            } )}
          </div> 
          <TextField 
              variant="filled"
              type="text" 
              className="input" 
              placeholder="Your name"
              value={author}
              onChange={(event) => {setAuthor(event.target.value)}}
              onKeyDown={handlePressInput} />
          <TextField 
              variant="filled"
              type="text" 
              className="input" 
              placeholder="Your message"
              value={text}
              onChange={(event) => {setText(event.target.value)}}
              onKeyDown={handlePressInput} /> 
          <Button 
              variant="outlined"
              className="button" 
              onClick={addNewMessage}>
              Send
          </Button>
        </div>
    )

}