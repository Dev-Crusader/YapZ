import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Chatpage = () => {
  const [ chats  , setChats] = useState([])
  const fetchChats = async()=>{
    const {data} = await axios.get("/api/chat")
    setChats(data)
  }

  useEffect(()=>{
    fetchChats()

  },[])
  return (
    <div>
      {chats.map((chat)=>{<div key = {chat.id}>
        {chat.chatName}
        </div>
      })}
    </div>
  )
}

export default Chatpage