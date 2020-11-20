import React, { useState , useEffect} from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import  { IconButton } from '@material-ui/core';

function App() {

  const[input,setInput] = useState('');
  const[messages,setMessages] = useState([]);
  const[username, setUsername] = useState('');

  // useState = variable in REACT
  // useEffect = run code on condition in REACT

  useEffect(() => {
    //run once when the app component loads
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc => ({id:doc.id, message:doc.data()})))
    } );
  }, [] )


  useEffect(() => {
    // Run code here...
    // if its blank inside [] ,this code runs ONCE when the app component loads
    // if we have a variable like input inside [] every single time we entered input it will loads
    //const name = prompt('Please enter your name');
    setUsername(prompt('Please enter your name'))
  }, [] ) // Condition

  const sendMessage = ( event ) => {
    // all the logic to send messages goes here
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  };

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100%h=100" alt="img"/>
      <h1>Hello WinZcode Programmers!</h1>
  <h2>Welcome {username}</h2>

      <form className="app__form">
      <FormControl className="app__formControl">
        <Input className="app__input" placeholder='Enter a Message...' value={input} onChange={event => setInput(event.target.value)} />

        <IconButton className="app__iconButton" disabled={!input} varient="contained" color="primary" type="submit" onClick={sendMessage}>
          <SendIcon />
        </IconButton>

        
      </FormControl>
      </form>

      <FlipMove>
      {
        messages.map(({id,message}) => (
          <Message key = {id} username={username} message={message}/>
      ))
      }
       </FlipMove>

    </div> 
  );
}

export default App;
