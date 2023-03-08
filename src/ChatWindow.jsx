
import React from "react";
import Jdenticon from 'react-jdenticon';
import { nanoid } from 'nanoid';
import {BsFillPencilFill} from 'react-icons/bs';
import Footer from "./Footer.jsx";
import Chat from "./Chat.jsx"
import "./chatWindow.css";


export default function ChatWindow(props){

    const yourChatIds=[];

    async function sendData(data){
        const option ={
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };
        const res = await fetch('/api', option);
    }

    function handelSend(content){
        const ID=nanoid();
        const name=props.userName;
        yourChatIds.push(ID);
        sendData({    
            id:ID,
            name:name,
            content:content
        })
    }
    
    return(
        <div className="Chat--outerFrame">
            <header className="chat--header">
                <div className="chat--profilePic">
                    <Jdenticon 
                        value={props.userName} 
                    />
                </div>
                <h5 className="chat--userName">
                    {props.userName || "Anonymous"}
                </h5>
                <BsFillPencilFill 
                    className="chat--userNameEdit"
                    onClick={props.handelNameEdit}
                />
                
            </header>
            <Chat 
                yourChatIds={yourChatIds}/>
            <Footer
                handelSend={handelSend}/>
        </div>
    )
}