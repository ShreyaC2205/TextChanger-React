//REACT IS A LIBRARY
//this works on component based architecture

/*PROPS- EX-  if we consider a form as a templte means we can get the same form which let us to fill specific information, so forms could be multiple and we can fill different information in every form
so here FORM = COMPONENT & FILLED INFO = PROPS, so we can use same comonent with different content and we send different content through PROPS */
//Components can be CLASS BASED & FUNCTION BASED, previously create react app used to use class based components but now it use FUNCTION BASED COMPONENT

/*if for some reason we need to replicate node_module folder we will need package.json and package-lock.json, thats why when we give our project to someone we dont give them node module folder this folder will always be in gitignore bcoz other person can download node_module very easily with package.json, he jus have to write 'npm install' */
/*README- it gives us a basic readme, while pushing our project in github content writtn in this file will be displayd to us in place of readme, there are basic information in this file, we keep update/modify it while working on a serious project */

/*we have intslled create react app using npx (FROM REACT DOCUMENTATION) -
syntax- npx install create-react-app my-app*/
//now a react app wll get generated with the name of my-app 

//NPM- if we install any package using npm it means we completely install the package in our harddisk, now the package is ours.
//NPX- it means if we want to use any package without downloading it we can do it, it is like to take this package as a rent and returning it after use. 

//THIS FILE IS ENTRY POINT 
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//above code says, where the id is 'root' put the app component there, and root id is in index.html
reportWebVitals();