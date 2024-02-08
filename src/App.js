//THIS IS ALSO A MAIN FILE, WHATEVER WILL BE WRITTEN IN APP.JS OUR APP WILL LOOK LIKE THAT IN SERVER

// import logo from "./logo.svg";
import "./App.css"; //"Lovely" red color is imported from this css file. WE CAN IMPORT ANY CSS FILE HERE APART FROM THIS FOLDER TOO..
import React, { useState } from "react";

import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar"; //this will autometiaclly get imported when we will import the component below
import TextForm from "./components/TextForm";

//IMPORTING REACT ROUTER
import { Routes, Route } from "react-router-dom";

// let name = "Shreya"; //we can use variables inside JSX, we can use conditional expressions and ternory operators, object etc

//***BABEL COMPILES JSX***

function App() { //function based component
  const [mode, setMode] = useState("light");

  const DarkTheme = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#181818"; //changing background color too, using toggle on navbar
      showAlert(
        " Dark Mode has been enabled",
        "success"
      ); /*passing arguments from here (sending "message" to msg paramter and "type" in tyype parameter) */
      // document.title = "TextChanger-DarkMode"; // if we want to change the title while enabling dark mode or any mode we can you this otherwise no use

      //FLASHING THE TITLE - BELOW CODE IS TO CONTINIOUS CHANGE THE TAB TITLE IN GIVEN INTERVAL WHEN WE WILL ENABLE DARK MODE (THIS IS GENRALLY USED TO CATCH THE ATTENTION OF USER)
      // setInterval(() => {
      //   document.title = "TextChanger is amazing"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextChanger now"
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light Mode has been enabled", "success");
      // document.title = "TextChanger-LightMode"; //if we want to change the title(tab name) of our website in any case [this is just for example, WE CAN USE THIS FOR EX FOR TO SHOW HOW MANY MESSAGES ARE UNREAD IN  FACEBOOK LIKE IT SHOWS (1,2,3...) IN BRACKET BESIDE OF FACEBOOK ICON TO NOTIFY THIS MANY MESSAGE/NOTIFICATION HAV RECIVED. OR TO SHOW THIS MANY NNUMBERS OF EMAILS IS UNREAD ETC]
    }
  };

  const blueTheme = () => {
    if (mode === "light") {
      setMode("primary");
      document.body.style.backgroundColor = "#09567A"; //changing background color too, using toggle on navbar
      showAlert(
        " Blue Mode has been enabled",
        "success"
      ); /*passing arguments from here (sending "message" to msg paramter and "type" in tyype parameter) */
      // document.title = "TextChanger-BlueMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light Mode has been enabled", "success");
      // document.title = "TextChanger-LightMode";
    }
  };

  const PinkTheme = () => {
    if (mode === "light") {
      setMode("danger");
      document.body.style.backgroundColor = "#ee6b6e"; //changing background color too, using toggle on navbar
      showAlert(
        " Pink Mode has been enabled",
        "success"
      ); /*passing arguments from here (sending "message" to msg paramter and "type" in tyype parameter) */
      // document.title = "TextChanger-PinkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light Mode has been enabled", "success");
      // document.title = "TextChanger-LightMode"; 
    }
  };

  const GreenTheme = () => {
    if (mode === "light") {
      setMode("success");
      document.body.style.backgroundColor = "#113815"; //changing background color too, using toggle on navbar
      showAlert(
        " Pink Mode has been enabled",
        "success"
      ); /*passing arguments from here (sending "message" to msg paramter and "type" in tyype parameter) */
      // document.title = "TextChanger-GreenMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light Mode has been enabled", "success");
      // document.title = "TextChanger-LightMode";
    }
  };

  //FOR ALERT TAG
  const [alert, setAlert] = useState(null); //initially setting alert state as null, but we will have to fix it in Alert component

  const showAlert = (message, type) => {
    //this function takes message of alert and the type of alert(types>> primary(blue color strip), success(green color strip), warning(yellow color strip), danger(red color strip) )
    setAlert({
      //here we are setting the arguments in parameter | parameter: argument [ARGUMENTS ARE ACTUAL DATA]
      msg: message,
      tyype: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return ( //WHATEVER IS WRITTEN INSIDE return braces is JSX, except the content inside return braces everything is JS, JSX is kind of html we can write JS too inside {braces} mixing with this html , this is bcoz developer wanted to make this unite where everything (html, js ,css) are togther at one place which saves time and decrease the complexity
    // <h1>This is me</h1> // here directly writing this will give us an error bcoz we can only return 1 element at a time
    //RIGHT WAY TO RETURN MORE THAN 1 ELEMENT IS USING JSX FRAGMENT  --->   <> content </>
    // <> //THIS IS JSX FRAGMENT, in jsx we only can return 1 tag, to return multiple tags we wraps all the content inside this tag. below we have 2 tags 1 is div and other is h1
    // <h1>This is me</h1>
    //   <div className="App">  //FROM HERE THIS WAS BY DEFAULT IN THIS FILE
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React with Shrea
    //       </a>
    //     </header>
    //   </div>
    //   </>

    //EXAMPLE, THIS IS A PRACTICE CODE
    // <>
    //   <nav>
    //     <li>Home</li>
    //     <li>Services</li>
    //     <li>Contact Us</li>
    //   </nav>

    //   <h1>Hello {name}</h1> {/*way to use variable*/}

    //   <div className="container">
    //     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur unde vitae dicta deleniti aut quasi similique dolor officiis expedita! Praesentium dicta nesciunt numquam, fugit accusamus aliquam sequi vero laudantium, doloribus iste corrupti minus recusandae reprehenderit ipsa odio quod! Velit at aliquam possimus mollitia rem omnis.
    //   </div>
    //   <div className="blank">Lovely</div>
    // </>

    //CREATING OUR FIRST APPLICATION USING BOOTSTRAP
    //for this we will have to import link for js and css from bootstrap documentation in index.html(inside PUBLIC folder)
    //then we have copy pasted the code for navbar given as components in bootstrap documentation's component section

    //     <>
    //     <nav className="navbar navbar-expand-lg bg-body-tertiary">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="/">TextChanger</a>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="/">Home</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="/">About</a>
    //         </li>
    //       </ul>
    //       <form className="d-flex" role="search">
    //         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    //         <button className="btn btn-outline-success" type="submit">Search</button>
    //       </form>
    //     </div>
    //   </div>
    // </nav>
    // </>
  //WE DONT WRITE DETAILS HERE LIKE ABOVE CODE, HERE WE ONLY PUT TAGS AND ANY IMP CODE IF REQUIRED LIKE BELOW, THE COMPLETE CODE/CONTENT OF THE TAGS WILL BE IN TAG COMPONENT FILES

    //MAKING OUR OWN COMPONENT
    //Here we have commented the above navbar code bcoz we will not write the complete navbar code here we will make the navbar component and we will just import that component here

    //ADVANTAGE OF USING COMPONENT is that we can use that part (ex- here the component is navbar) in any of our website and we can do few changes if needed. but the BENEFITE here is WE WONT HAE TO WRITE THE COMPLETE NAVBAR CODE AGAIN AND AGAIN
    <>
        <Navbar
          title="TextChanger"
          aboutText="About TextChanger"
          mode={mode}
          toggleMode={DarkTheme}
          blueTheme={blueTheme}
          PinkTheme={PinkTheme}
          GreenTheme={GreenTheme}
        />{" "}
        {/**here we are directly changing the title name of our website kinda sending it like a argument using  "props" word as parameter in our Navbar component 
//WE CAN PASS ANYTHING LINKE LINKS OR N NUMBER OF PROPS, WE CAN ALSO MAKE GROUP OF MULTIPLE PROPS AND PASS THAT GROUP AS AN OBJECT ETC
  */}
        {/*SECOND COMPONENT*/}
        <Alert alert={alert} />


        {/*HERE THE CODE IS TO SWITCH BETWEEN THE PAGES- means if we click on about the about component will display, same as with home or textForm component */}
        {/*Always use keyword "exact path" bcoz react do partial matching, for ex, if our component name is /users and component 2 name is /users/home. so if we dont use exact path keyword, react will only match initial letter i.e /users it wont completely match the /users/home, so it could craete trouble, so always use keyword "exact path" */}
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/about"
              element={
                <About heading="About Us" mode={mode} showAlert={showAlert} />
              }
            />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Try TextChanger - Word counter, Character counter, Remove extra spaces"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>

          {/*THIRD COMPONENT- we had imported these tags initially just to see below pages*/}
          {/* container is class of bootstrap which will set the element at the center AND my-3 is also a class which provides margine in y axis of 3 (spaces above the texts)*/}
          {/* <TextForm heading="Try TextChanger - Word counter, Character counter, Remove extra spaces" mode={mode} showAlert={showAlert}/> */}
          {/*FOURTH COMPONENT*/}
          {/* <About/> */}
        </div>
    </>
  );
}
export default App;