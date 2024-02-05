import React from "react";

export default function Alert(props) {
  //FUNCTION TO CAPITALIZE 1ST LATTER OF ANY WORD
  const capitalize = (word) =>{ //so here it takes a word 
    const lower = word.toLowerCase(); //saving the word in "lower" variable as lowercase
    return lower.charAt(0).toUpperCase()+lower.slice(1) //now the latter/charecter at lower variable's index 0, making that charecter uppercase and we are slicing 1st charecter of the lower variable's word and attaching rest of the latter of that word (except 1st latter) with lower's 1st uppercase latter
  }
  return (
  <div style={{height: '50px'}}> {/*Here we have added this div to give height to alert strip,so our other component will not going to shift while changing theme color or any kind of alert, CLS - CUMILATIVE LAYOUT SHIFT, when we do any action our coponent gets shifted every time that is not good for the website CLS SHOULD BE THE LESS IN OUR WEBSITE IF IT IS LESS IN OUR WEBSITE THE GOOGLE PREFER OUR WEBSITE*/}
  {props.alert &&  //[BCOZ OUR ALERT IS INITIALLY NULL SO WE WILL HAVE TO HANDLE IT] here this is an syntax>> it means to check "props.alert" so it will get eveluate first so if it gets "false" means if the props.alert is empty "dont do anything" but if there is any value in "props.alert" means if it is "true" so it means to eveluate furthur go ahead and execute the furthur code below
      <div
        className={`alert alert-${props.alert.tyype} alert-dismissible fade show`} //here as we are sending type of the alert this will make colord the alert strip according to the type, as here the type is "success" so the strip color will be green.
        role="alert"
      >
        <strong>{capitalize(props.alert.tyype)}</strong>:{props.alert.msg} {/*Here we are reciving our actual argument(message and type) here in parameter (msg and tyype) so this will gonna print on alert strap */}
        {/*if we want to show alert in BOLD */}
      </div>}
      </div>
    )
}