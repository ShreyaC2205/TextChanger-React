import React from "react";

export default function About(props) {
  // const [btnText, setBtnText] = useState("Enable Dark Mode");

  // const [myStyle, setMyStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white'
  // });

  // const HandleToggle = () =>{
  //   if (myStyle.color === 'black') {
  //     setMyStyle({
  //       color: 'white',
  //       backgroundColor: '#232323'
  //     })
  //     setBtnText("Enable Light Mode")
  //   }
  //   else{
  //     setMyStyle({
  //       color: 'black',
  //       backgroundColor: 'white'
  //     })
  //   }
  //   setBtnText("Enable Dark Mode")
  // }

  // const [btnStyle, setBtnStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white',
  // });
  
  // const HandleToggleButton = ()=>{
  //   if (btnStyle.color === 'black') {
  //     setBtnStyle({
  //       color: 'skyblue',
  //       backgroundColor: '#232323'
  //     })
  //     setBtnText("Enable Light Mode")
  //   }
  //   else{
  //     setBtnStyle({
  //       color: 'black',
  //       backgroundColor: 'white'
  //     })
  //     setBtnText("Enable Dark Mode")
  //   }
  // }

  return (
    <div className="container" style={{color: props.mode ==='dark'? 'white': props.mode ==='primary'?'white':props.mode ==='danger'?'white':props.mode ==='success'?'white':'black'}}>
      <h1 className="my-3">{props.heading}</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button 
              className={`accordion-button collapsed btn btn-${props.mode ==='light'?'primary':props.mode ==='dark'?'secondary':props.mode ==='primary'?'info':props.mode ==='danger'?'danger':props.mode ==='success'?'success':'primary'}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div style={{backgroundColor: props.mode ==='dark'? '#181818': props.mode ==='primary'?'#09567A':props.mode ==='danger'?'#ee6b6e':props.mode ==='success'?'#113815':'white'}}
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{color: props.mode ==='dark'? 'white': props.mode ==='primary'?'white':props.mode ==='danger'?'white':props.mode ==='success'?'white':'black'}}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button collapsed btn btn-${props.mode ==='light'?'primary':props.mode ==='dark'?'secondary':props.mode ==='primary'?'info':props.mode ==='danger'?'danger':props.mode ==='success'?'success':'primary'}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div style={{backgroundColor: props.mode ==='dark'? '#181818': props.mode ==='primary'?'#09567A':props.mode ==='danger'?'#ee6b6e':props.mode ==='success'?'#113815':'white'}}
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{color: props.mode ==='dark'? 'white': props.mode ==='primary'?'white':props.mode ==='danger'?'white':props.mode ==='success'?'white':'black'}}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button 
              className={`accordion-button collapsed btn btn-${props.mode ==='light'?'primary':props.mode ==='dark'?'secondary':props.mode ==='primary'?'info':props.mode ==='danger'?'danger':props.mode ==='success'?'success':'primary'}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div style={{backgroundColor: props.mode ==='dark'? '#181818': props.mode ==='primary'?'#09567A':props.mode ==='danger'?'#ee6b6e':props.mode ==='success'?'#113815':'white'}}
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{color: props.mode ==='dark'? 'white': props.mode ==='primary'?'white':props.mode ==='danger'?'white':props.mode ==='success'?'white':'black'}}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}