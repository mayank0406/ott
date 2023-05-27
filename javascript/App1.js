// import {Component} from 'react';


// class App extends Component
// {
//  render()
//  {
//   return (
//     <div>
//       <h1>This is class component</h1><hr/>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur laudantium praesentium sint perspiciatis iste! Praesentium minima sequi omnis hic? Consectetur assumenda perferendis eaque ad facere libero, nostrum eum sequi aliquid cupiditate architecto praesentium error voluptatibus porro minima blanditiis, repudiandae eos ratione maxime at placeat! Error?</p>

//     </div>
//   )
//  }
// }
// export default App;


// function App()
// {

//   // let styles ={
//   //   backgroundColor : "red",
//   //   color : "white",
//   //   margin : "10px 0px",
//   //   textAlign : "Center"
//   // }
//   // style = {{fontSize : "30px"}}
//   // <h1  style= {styles}>mayank</h1>

//   return (
//     <>
//     <div >
//     </div>
//    <h1>mayank</h1>
//     <h2>hii</h2>
//     </>
//   )
// }
// export default App;


// function App() {
//   return (
//     <div className='input-box'>
//       <input type="text" />
//       <span>username</span>
//     </div>
//   )
// }

// export default App;

// import React from 'react'

// function App() {

//   let x = ()=>{
//     console.log("this is 0 argument function");
//   }

//   let y = (a,b)=>{
//     console.log("this is argument function : "+ a,b);
//   }
//   return (
//     <div>
//       <h1>Event Listner</h1>
//       <hr />
//       <button onClick={x}>click me 1</button>
//       <button onClick={()=>{y(10,20)}}>click me 2</button>
//       <hr />
//     </div>
//   )
// }

// export default App;




// import { useState } from 'react';
// function App() {

//   let [time, setTime] = useState(0);
//   setInterval(() => {
//     setTime(new Date().toLocaleTimeString());
//   }, 1000);
// return (
//   <div>
//     <h1>{time}</h1>
//     <hr />
//   </div>
// )
// }
// export default App;



// import React, { useState } from 'react'

// function App() {

//   let increaseValue = ()=>{
//     count = count+10;
//     console.log(count);
// }
//   let [period, setperoid] = useState("evening");
//     //  let [count, setcount] = useState(0);
//      let [lightTheam , setTheam] = useState(true);

//      let light = {color : "black" , backgroundColor : "white"}
//      let dark = { color : "white", backgroundColor : "black"}

//      let color1 = {color : "green"}
//      let color2 = {color : "red"}

//   return (
//     <div className='input-box' style={lightTheam ? light : dark}>
//       {/* {period == "morning" && <h1>🌻 </h1>} */}
//       {period == "morning" ? <div><img height={"350px"} src="8c185a197bfb3a433f13f2081d7aed54.jpg" alt="" /></div> :
//        <div> <img height={"350px"} src="Download-Free-Images-Of-Good-Evening.jpg" alt="" /></div>}

//         {/* <h1 style={count%2==0 ? color2 : color1} >{count}</h1> */}

//         {/* {count%2==0 ? <h1>ODD</h1> : <h1>EVEN</h1>} */}
//         <button onClick={ ()=>{ setTheam(true),setperoid("morning")}}>Increment</button>
//         <button onClick={()=>{ setTheam(false),setperoid("evening") }}>Decrement</button>
//     </div>
//   )
//   // , setcount(count+1)
//   //, setcount(count-1)
// }

import React from 'react'
// import Tracker2 from './components/Tracker2';
// import Tracker from './components/Tracker';
// import Parent from './components/Parent';
// import Child from './components/Child';
import Translate from './components/Translate';

function App() {
  return (
    <>
      {/* <Tracker/> */}
      {/* <Tracker2/> */}
      {/* <Parent/>
      <hr /> */}
      <Translate/>
    </>
  )
}


export default App;



