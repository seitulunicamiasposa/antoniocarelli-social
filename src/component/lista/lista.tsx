import React, { useContext } from "react";
import './style.css';
import Element from "../element/elemento";
/*import {TPost, Post} from "../../types/commontypes";*/
import { AppContext, IAppContext } from "../../providers/AppContext";

function ListaTweet() {
    /*const context = useContext(AppContext) as IAppContext*/
    const {jsonTweet /*setJsonTweet*/} = useContext(AppContext) as IAppContext
    
 return (
        <div className="lista">
            <div className="titolo"><h2 className="title">Lista tweet</h2></div>
        <ul id="tweet-list">
            {jsonTweet && jsonTweet.slice().reverse().map((item) => (
            <Element id={item.id} 
            title={item.title} 
            body={item.body} 
            likes={item.reactions.likes} 
            dislikes={item.reactions.dislikes} 
            tags={item.tags}
            views={item.views}
            userid={item.userId}/>
            ))}
        </ul>
        </div>
    )
}

export default ListaTweet;