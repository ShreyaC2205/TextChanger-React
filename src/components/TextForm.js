import React, { useState } from "react";

export default function TextForm(props) {
  //USESTATE IS HOOK OF REACT
  const [text, setText] = useState(""); //this is default value of text it could be any text or blank, if there is any text so the user have to clear that text before writing his/her text, so it good to keep it blank for here.
  // text = "new text"; //wrong way to change the text
  // setText("New text"); //right way to change the text

  const HandleUpClick = () => {
    // console.log("button was clicked" + text); //here as we can see the text value is input by the user in console it means we can access text value inside , so if we can access text value we can change it too..
    let newText = text.toUpperCase(); //so here we are changing our text value in uppercase
    setText(newText); //setting changed uppercase value in text
    props.showAlert(" Converted to uppercase", "success");
  };

  const HandleLowClick = () => {
    // console.log("button was clicked" + text); //here as we can see the text value input by the user in console it means we can access text value, so if we can access text value we can change it too..
    let newText = text.toLowerCase(); //so here we are changing our text value in uppercase
    setText(newText); //setting changed uppercase value in text
    props.showAlert(" Converted to lowercase", "success");
  };

  const HandleClearText = () => {
    alert("Are you sure?");
    let newText = " ";
    setText(newText);
    props.showAlert(" Text cleared!", "success");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance(); //this function pronounce the written word
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert(" Speaking...", "success");
  };

  const HandleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert(" Copied to clipboard!", "success");
  };

  const HandleExtraSpaces = () => {
    let newText = text.split(/[ ]+/); //this is regex (Reguar Expression) it is used for searching and manipulating text strings, particularly in processing text files. Regex is not a programming language-specific application; in fact, it can be used in all programming languages, so here we are doing-
    //WE ARE SPLITTING TEXTS HAVING 1 OR MORE THAN 1 SPACE AND MAKING THEM ARRAY WITHOUT HAVING ANY SPACES AND THEN JOINING THEM BY " " SINGLE SPACE.
    setText(newText.join(" "));
    props.showAlert(" Extra spaces removed!", "success");
  };

  const HandleOnChange = (event) => {
    // console.log("text was changes");
    setText(event.target.value); //it means we can change, edit, type anything inside textarea.also by using setText our text is also getting updated. on change works like>> add change text with already written text, text value + change text
  };

  return (
    <>
      <div
        className="container"
        style={{
          color:
            props.mode === "dark"
              ? "white"
              : props.mode === "primary"
              ? "white"
              : props.mode === "danger"
              ? "white"
              : props.mode === "success"
              ? "white"
              : "black",
        }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control my-3"
            value={text}
            id="textBox"
            rows="8"
            onChange={HandleOnChange} 
            // style={{backgroundColor: props.mode ==='dark'?'#181818':'white', color: props.mode ==='dark'?'white':'black'}}
          ></textarea>
          {/*here the value is text, so whatever is set in text will appear inside textarea AND onchange event listner will get fired whenever we will try to write something inside a textarea*/}
          <button disabled = {text.length===0}
            className={`btn btn-${
              props.mode === "light"
                ? "primary"
                : props.mode === "dark"
                ? "secondary"
                : props.mode === "primary"
                ? "info"
                : props.mode === "danger"
                ? "danger"
                : props.mode === "success"
                ? "success"
                : "primary"
            } mx-2 my-1`}
            onClick={HandleUpClick}
          >
            Convert to Upper case
          </button>
          <button disabled = {text.length===0}
            className={`btn btn-${
              props.mode === "light"
                ? "primary"
                : props.mode === "dark"
                ? "secondary"
                : props.mode === "primary"
                ? "info"
                : props.mode === "danger"
                ? "danger"
                : props.mode === "success"
                ? "success"
                : "primary"
            } mx-2 my-1`}
            onClick={HandleLowClick}
          >
            Convert to Lower case
          </button>
          <button disabled = {text.length===0}
            className={`btn btn-${
              props.mode === "light"
                ? "primary"
                : props.mode === "dark"
                ? "secondary"
                : props.mode === "primary"
                ? "info"
                : props.mode === "danger"
                ? "danger"
                : props.mode === "success"
                ? "success"
                : "primary"
            } my-1`}
            type="submit"
            onClick={speak}
          >
            Speak
          </button>
          <button disabled = {text.length===0}
            className={`btn btn-${
              props.mode === "light"
                ? "primary"
                : props.mode === "dark"
                ? "secondary"
                : props.mode === "primary"
                ? "info"
                : props.mode === "danger"
                ? "danger"
                : props.mode === "success"
                ? "success"
                : "primary"
            } mx-2 my-1`}
            type="submit"
            onClick={HandleCopy}
          >
            Copy
          </button>
          <button disabled = {text.length===0}
            className={`btn btn-${
              props.mode === "light"
                ? "primary"
                : props.mode === "dark"
                ? "secondary"
                : props.mode === "primary"
                ? "info"
                : props.mode === "danger"
                ? "danger"
                : props.mode === "success"
                ? "success"
                : "primary"
            } my-1`}
            onClick={HandleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
          <button disabled = {text.length===0}
            className={`btn btn-${
              props.mode === "light"
                ? "primary"
                : props.mode === "dark"
                ? "secondary"
                : props.mode === "primary"
                ? "info"
                : props.mode === "danger"
                ? "danger"
                : props.mode === "success"
                ? "success"
                : "primary"
            } mx-2 my-1`}
            onClick={HandleClearText}
          >
            Clear Text
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{
          color:
            props.mode === "dark"
              ? "white"
              : props.mode === "primary"
              ? "white"
              : props.mode === "danger"
              ? "white"
              : props.mode === "success"
              ? "white"
              : "black",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => { //here splitting with "/\s+/" this is a "REGEX reguar expression" here means split by a space or split by a new line so here "\s" means any white space including new line and "+" means more than 1 space

              //here FILTER is a method which takes a function, so if the function returns true for any element, that element will move further means that element(word will get displayed in our website while typing in text area)
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} charecters
        </p>
        {/*here for words>> it will count it as a 1 word which are splitted by the space, so the group of charecters splitted by the space will become a word and the number of the words called length */}
        <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0;
            }).length} Minutes read</p>{" "} {/*Added filter here too bcoz if there is no word typed in textarea the time ( ___ minutes to read should be 0 )*/}
        {/* according to google 125 words take 1 min to read so 1 word will take 1/125 = 0.008min to read the 1 word so this way it will give us an estimate time to read the words written by us*/}
        <h3>Preview</h3>
        <p>
          {text.length > 0 ? text : "Nothing to preview!"}
        </p>
      </div>
    </>
  );
}