import React, { useContext } from "react";
import './style.css';
import { useState } from "react";
import { AppContext, IAppContext } from "../../providers/AppContext";


function TextArea() {
   const [contTweet, setContTweet] = useState<string>('');
   const [contTitleTweet, setContTitleTweet] = useState<string>('');
   const [contTag, setContTag] = useState<string>('')
   const [isClicked, setIsClicked] = useState(false);

   const {jsonTweet, setJsonTweet} = useContext(AppContext) as IAppContext

function addTweet(input:string) {
    setContTweet(input); //qui gli passo il valore   
}

function addTitle(input:string) {
    setContTitleTweet(input);
}

function addTag(input:string) {
    setContTag(input);
}

function save() {
    if(jsonTweet){
        const obj = {
            id: jsonTweet?.length + 1,
            title: contTitleTweet,
            body: contTweet,
            tags: [contTag],
            reactions: {
                likes: Math.round(Math.random() * 100),
                dislikes: Math.round(Math.random() * 100)
            },
            views: Math.round(Math.random() * 100),
            userId: Math.round(Math.random() *100)
        }
        let tweet = jsonTweet
        tweet.push(obj)
        setJsonTweet([...tweet])
        canc()
    }
}

function canc() {
    setContTweet('');
    setContTag('');
    setContTitleTweet('');
}

function showButton() {
    if(contTweet.length >= 1 && contTweet.length <= 280) {
       return (<button id="save" onClick={() => save()}>Twitta
  <span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
  <path fill="#fff" d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z"></path>
</svg>
  </span>
</button>)
    } else {
        return null;
    }
}

   const showContent = () => {
    setIsClicked(!isClicked);
   }

   if(!isClicked === true) {
    return ( 
        <div className="content">
            <h3>Scrivi il tuo tweet</h3>
 
<label className="container">
       <input type="checkbox" id="checkbox" checked={isClicked} onChange={showContent}/>
            <div className="line"></div>
            <div className="line line-indicator"></div>
</label>
        </div>
    )
   } else {
     return ( 
        <div className="content2">
            <h3>Scrivi il tuo tweet</h3>
            <label className="container">
       <input type="checkbox" id="checkbox" checked={isClicked} onChange={showContent}/>
            <div className="line"></div>
            <div className="line line-indicator"></div>
</label>
            <textarea placeholder="Scrivi il titolo...(Opzionale-50 caratteri)" className="title" value={contTitleTweet} onChange={(event) => addTitle(event.target.value)} maxLength={50}/>
            <textarea placeholder="Aggiungi un hashtag (opzionale)... #" className="hashtag" value={contTag} onChange={(event) => addTag(event.target.value)} maxLength={30}/>
            <textarea placeholder="Scrivi qui il tuo tweet... (280 caratteri)" className="body" value={contTweet} onChange={(event) => addTweet(event.target.value)} maxLength={280}/>
            {showButton()} 
        </div>
      )
}
}

export default TextArea;

//<button id="canc" onClick={() => canc()}>Canc</button>