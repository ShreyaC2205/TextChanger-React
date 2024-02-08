//ALWAYS START THE COMPONENT FILE NAME WITH CAPS LATTER

//importing proptypes
// import PropTypes from "prop-types"; //short form "impt"

//just type "rfc" it will give react function based component
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  //WE SHOULD NOT CHANGE PROPS HERE IN COMPONENT AT ANY COST, HERE PROPS SHOULD BE READ ONLY, WE WILL PASS THE THINGS FROM THE MAIN APP.JS
  return (
    // <nav className="navbar navbar-expand-lg bg-body-tertiary"> //for light/white navbar
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> {/*for black/dark navbar*/}

    <nav
      // <nav className="navbar navbar-expand-lg navbar-(color class name) bg-(color class name)"> //here navbar color classname is opposite, navbar-dark = white text color. navbar-light = black text color but bg-light means navbar white and bg-dark means navbar background color dark, so here we are passing the mode href change the text color according href the mode
      className={`navbar navbar-expand-lg navbar-${
        props.mode === "dark"
          ? "dark"
          : props.mode === "primary"
          ? "dark"
          : props.mode === "danger"
          ? "dark"
          : props.mode === "success"
          ? "dark"
          : "light"
      } bg-${props.mode}`}
      style={{height: "4vw"}}
    >
      {/* {" "} */}
      {/*we have written the code under `backticks` so that we can use tamplet literal/variable inshort we can write js inside it*/}
      <div className="container-fluid">
        {/*this(below)) was the previous name of our website */}
        {/* <a className="navbar-brand" href="/">TextChanger</a> */}{" "}
        <a className="navbar-brand" href="#">
          {/*here we are passing the title from App.js */}
          {props.title} {/*sended from app.js <Navbar/> tag */}
        </a>{" "}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" to="/">{" "} */}
              {/*we were using a and href for router */}
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText} {/*sended from app.js <Navbar/> tag*/}
              </Link>
            </li>
          </ul>

          {/*WE CAN USE SEARCH BAR AND BUTTON BELOW IF NECESARY */}
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>{" "} */}
          {/*For Blue navbar button */}
          {/* <button className="btn btn-success" type="submit">Search</button> For green navbar button, if we dont write outline with btn the button color will be solid*/}
          {/* <button className="btn btn-outline-danger" type="submit">Search</button> For red navbar button */}
          {/* </form> */}

          {/*SWITCH href toggle dark/light mode*/}

          <div
            className={`form-check form-switch mx-3 text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              style={{cursor: "pointer", border:
              props.mode === "dark"
                ? "1px solid white"
                : props.mode === "light"
                ? "1px solid grey"
                : "grey"}}
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Theme
            </label>
          </div>

          {/*BLUE THEME BUTTON */}
          <div
            className={`form-check form-switch mx-3 text-${
              props.mode === "light" ? "primary" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              style={{cursor: "pointer", border:
                  props.mode === "primary"
                    ? "1px solid white"
                    : props.mode === "light"
                    ? "1px solid grey"
                    : "grey"}}
              onClick={props.blueTheme}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Blue Theme
            </label>
          </div>

          {/*PINK THEME BUTTON */}
          {/* <div
            className={`form-check form-switch mx-3 text-${
              props.mode === "light" ? "danger" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.PinkTheme}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Pink Theme
            </label>
          </div> */}

          {/*GREEN THEME BUTTON */}
          {/* <div
            className={`form-check form-switch mx-3 text-${
              props.mode === "light" ? "success" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.GreenTheme}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Green Theme
            </label>
          </div> */}

        {/*CREATING COLOR THEME PALLET */}
          <div className="d-flex">
            <div className="bg-danger rounded mx-2" style={{height: "2vw", width: "2vw", cursor: "pointer", border: "1px solid white"}} onClick={props.PinkTheme}></div>
          </div>
          <div className="d-flex">
            <div className="bg-success rounded mx-2" style={{height: "2vw", width: "2vw", cursor: "pointer", border: "1px solid white"}} onClick={props.GreenTheme}></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

//DECLARING PROP TYPES
//we do this href make it as a check, here after declaring proptype we can only send that type for that property, like below for title we can only send "string" proptype from main app, other proptypes like number or object, arrey etc will give us an error, this is for safety in case of error in future
// Navbar.protoType = {
//     title: PropTypes.string,
//     aboutText: PropTypes.string
// }

//IS REQUIRED
// Navbar.protoType = {
//     title: PropTypes.string.isRequired, //marking any props as isRequired means it is mamdatoey href pass the props from the main app, or there  should be any default props declared (like below) otherwise it will give us an error ( we use it when we want something(in place of props) should not be left as undefined, something is mandetory href define)
//     aboutText: PropTypes.string
// }

//DEFAULT PROPS are used in case if we dont pass any props from the main app, so this default props will show up at there places.
// Navbar.defaultProps = {
//     title: 'set title here',
//     aboutText: 'set about text here'
// }