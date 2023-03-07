import React, { useEffect } from "react";
import ChatRight from "./ChatRight";
import ChatLeft from "./ChatLeft";
import "./chat.css";

export default function Chat(props){

    const [chats,setChat]=React.useState([])

    function loadData(){
        console.log("data Requested")
        fetch('/api')
        .then(res => res.json())
        .then(data => {
            setChat(data);
        })
        
    }

    useEffect(()=>{
        console.log("useEffect called")
        loadData()
        const interval=setInterval(loadData,1000)
        return(()=>{
            console.log("useEffect cleanup function called")
            clearInterval(interval)
        })
    },[])

    const chatElements = chats.map(chat => props.yourChatIds.includes(chat.id) ? 
        <ChatRight
        key={chat.id}
        content={chat.content}
        img={`data:image/png;base64,${chat.img}`}
        />
        :
        <ChatLeft
        key={chat.id}
        content={chat.content}
        img={`data:image/png;base64,${chat.img}`}
        />
    )


    function handelReload(){
        setChat([{
            id:"K5w1C2Lyrndo1ngw8ZSlm",
            img:"",
            content:"hello how is this working",
            selfMsg:true,
        }])
    }

    return(
        <main className="Chat--group">
            {chatElements}
        </main>
    )
}