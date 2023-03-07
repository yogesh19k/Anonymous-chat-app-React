import React from "react";
import "./chatRight.css"

export default function ChatRight(props){
    return(
        <div className="Chat--element--right">
            <p className="Chat--element--right--txt">
                {props.content}
            </p>
            <img 
                src={props.img}
                className="Chat--element--right--img"
            />
        </div>
    )
}