import React from "react";
import './style.css';

type TPostElement = {
    id: number,
    title: string,
    body: string,
    likes: number,
    dislikes: number,
    tags: any,
    userid: number,
    views: number
}

function Element(props: TPostElement) {
    return (
        <div className="element">
           <li className="tweet">{props.id}. {props.title} <br></br> 
           {props.body} #{props.tags} <br></br> 
           &#128077;: {props.likes} &#128078;: {props.dislikes} &#128065;: {props.views} <br></br>
           user ID: {props.userid} &#128101;
           </li><br></br>
        </div>
    )
}

export default Element;