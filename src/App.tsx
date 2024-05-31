import React from 'react';
import './App.css';
import twitter from '../src/img/twitter.png';
import TextArea from './component/textarea/textarea';
import ListaTweet from './component/lista/lista';
import { AppContext } from './providers/AppContext';
import {TPost, Post} from './types/commontypes';
import { useState, useEffect } from 'react';

function App() {
  const [jsonTweet, setJsonTweet] = useState<Post[] | undefined>()
  const tweet = {jsonTweet, setJsonTweet}

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(json => setJsonTweet((json as TPost).posts))
        /*.catch(error =>  console.error('Errore durante il fetch dei dati:', error));*/
}, [])

  return (
    <AppContext.Provider value={tweet}>
    <div className="App">
      <header className="App-header">
      <div id="imgs"><img src={twitter} className="App-logosx" alt="logosx" />
      <img src={twitter} className="App-logodx" alt="logodx" /></div>
          <h1>TWITTER</h1>
          <p>Noi, quelli che rivogliono Twitter e i suoi Tweet</p>
      </header>
      <div className="contenuto">
      <TextArea /> 
      <ListaTweet />
      </div>
      <footer className="App-footer">
        <p>ITS APULIA DIGITAL MAKER  <br></br>
        Antonio Manuel Carelli</p>
      </footer>
</div>
</AppContext.Provider>
  );
}

export default App;
