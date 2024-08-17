import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Holidays from "./Holidays"
import Teacher from "./Teacher"
import 'animate.css';

const App = ()=> {

  return (
    <>
     <div>
    <BrowserRouter>
        <Routes>
          <Route path="teachers" element ={<Teacher/>}/>
          <Route path = "holidays" element = {<Holidays/>}/>
          <Route path="/" element = {<Home/>}/>
          <Route path = "contact-us" element= {<ContactUs/>}/>
          <Route path = "*" element = {<h1>404 path not found</h1>}/>
        </Routes>
    </BrowserRouter>
     </div>
    </>
  )
}

export default App

// import { useState } from "react";
// const App = ()=>{

  // let [show, setShow] = useState('true'); 

  // const test = ()=>{
  //   setShow(!show); 
  // }
  //  return (
  //   <div>
  //     <h1 style={{
  //       color : show ? 'blue' : 'red'
  //     }}>hii this is h1</h1>
  //     {show ? <p>show is true</p> : <p>show is false</p>}
  //     <button onClick={test}>
  //       {show ? "clicked" : "ClickHere"}
  //     </button>
  //   </div>
  // )

//   let [fontSize , setFontSize] = useState(30);
//   return (
//     <div>
//       <h1 style={{
//         fontSize : fontSize,
//         color : fontSize === 30 ?  'red' :  'blue'
//       }}>Hii fontsize is {fontSize}</h1>
//       <button onClick={()=>{
//         setFontSize(fontSize === 30 ? 100 : 30)
//       }}>ChangeFontSize to{fontSize === 30 ? 100 : 30}</button>
//     </div>
//   )
// }
// export default App;