import React, { useState } from "react";
import "./App.css";
var emoji = require('emoji.json')
 // console.log(emoji[2]);
  var newemoji = emoji.map(function(item){
    return {Emoji:item["char"],Meaning:item["name"]}
  });
  let emojisDictionary = Object.assign({}, ...newemoji.map((x) => ({[x.Emoji]: x.Meaning})));
  console.log(emojisDictionary);
  const emojis = Object.keys(emojisDictionary);

export default function App() {
  function changeHandler(event){
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);
    if(inputEmoji in emojisDictionary)
    setMeaning(emojisDictionary[inputEmoji]);
    else{
      setMeaning("failure to identify the Emoji");
    }
   }
   function emojiClickHandler(inputEmoji){
    setMeaning(emojisDictionary[inputEmoji]);
   }
  const [emoji,setEmoji] = useState("");
  const [meaning,setMeaning] = useState("Translation will come here");
  return (
    <div className="App">
      <h1 style={{backgroundColor:"#7C3AED",color:"#F3F4F6",height:"40px",padding:"1rem",fontSize:"40px"}}>Emoji Meaning Interpreter </h1>
      <input onChange={changeHandler}
             value={emoji}
             placeholder= {"Search the Emoji here!!"} />
      <h2 style={{fontSize:"40px"}}> {emoji} </h2>
      <h2 style={{fontSize:"40px"}}> {meaning} </h2>
      {
        emojis.map((emoji) => (
          <span onClick={() => emojiClickHandler(emoji)}
                >
            {" "}
            {emoji}{" "}

          </span>
        ))
      }
      
    </div>
  );
}
