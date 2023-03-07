import React from "react";
import {IoSendSharp} from 'react-icons/io5'

export default function Footer(props){
    const [postContent , setPostContent] =React.useState("")
    function handelPostContent(event){
        const txt=event.target.value;
        setPostContent(txt==="" ? "":
                txt[0].toUpperCase() + txt.slice(1))
    }

    function handelSend(){
        props.handelSend(postContent)
        setPostContent("")
    }

    return(
        <footer className="chat--footer">
        <textarea 
            className="chat--postContent"
            name="postContent" 
            cols={1}
            value={postContent}
            onChange={handelPostContent}
        />
        <IoSendSharp
            className="chat--sendButton"
            onClick={handelSend}
        />
        </footer>
    )
}