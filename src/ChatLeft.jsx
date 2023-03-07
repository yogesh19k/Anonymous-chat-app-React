import React from "react";
import "./chatLeft.css";

export default function ChatLeft(props){
    return(
        <div className="Chat--element--left">
            <p className="Chat--element--left--txt">{props.content}</p>
            <img 
                src={props.img}
                className="Chat--element--left--img"
            />
        </div>
    )
}