import {Provider} from 'react-redux'
import store from './redux/store.js'
import CakeContainer from './redux/CakeContainer.js';
import IcecreamContainer from './redux/IcecreamContainer.js';
import React from 'react';
import UserContainer from './redux/UserContainer.js'
function App(){
  return(
    <Provider store={store}>
      <div>
        <UserContainer/>
        {/* <CakeContainer/>
        <IcecreamContainer/> */}
      </div>
    </Provider>
  )
}
export default App;

// import logo from './logo.svg';
// import logo1 from './TheKiteRunner.jpg';
// import logo2 from './WarOfLanka.jpg';
// import logo3 from './WarOfLanka.jpg';
// import './App.css';
// import React from 'react';
// import Greet1 from './components/Greet1';
// import Greet2 from './components/Greet2';
// import Hello from './components/Hello';
// import Reg from './components/Reg';
// import Welcome from './components/Welcome';
// import Msg from './components/Msg';
// import Counter from './components/Counter';
// import HookCounter1 from './components/HookCounter1';
// import HookCounter2 from './components/HookCounter2';
// import Discount from './components/Discount';
// import EventBind from './components/EventBind';
// import UserGreeting from './components/UserGreeting';
// import UserGreeting_f from './components/UserGreeting_f';
// import NameList from './components/NameList';
// import PostList from './components/PostList';
// import Form from './components/Form';
// import HookCounter3 from './components/HookCounter3';
// import { Form_Functional } from './components/Form_Functional';
// import Discount_runtime from './components/Discount_runtime';
// import UpperToLower from './components/UpperToLower';
// import Shop from './components/Shop';
// import Contact from './components/Contact';
// import About from './components/About';
// import { BrowserRouter as Router,Routes, Route,Link } from 'react-router-dom';

// function App() {
//   return (
//  // App is parent componenet ... we are calling child component Greet from App(parent component)  
// <div className='App'>

//     {/* <Greet1/> */}
//     {/* <Greet2/> */}

//     {/* 
//         <Greet1 firstname="Sharvari"/>
//         <Greet1 firstname="Shweta"/>
//         <Greet1 firstname="Sandhya"/>
//     */}
  
//     {/* props */}

//     {/* case 1 */}
//     {/*
//      <Greet1 empid={112} empname="Sanika"/>
//      <Greet1 empid= "113" empname="Bhave"/>
//      */}

//     {/* case 2 */}
//     {/* <Greet1 empid= "113"/> */}

//     {/* register componenet */}
//     {/* <Reg name="Sharvari" age={20} dept="DS" pic={logo1}/>
//     <Reg name="Shweta" age={26} dept="CS" pic={logo2}/>
//     <Reg name="Sandhya" age={56} dept="AIML" pic={logo}/>
//     <Reg name="Sagar" age={20} dept="DS" pic="no image"/> */}

//     {/* <Greet1 empid={112} empname="Sanika">
//         <p>Child prop</p>
//         <button>Click me !</button>
//     </Greet1> */}
     
//     {/* class component */}
//     {/* <Welcome empid={112} empname="Sanika">
//     <   p>Child prop</p>
//         <button>Click me !</button>
//     </Welcome> */}

//     {/* <Msg/> */}

//     {/* <Counter value={1}/> */}

//     {/* < HookCounter1/> */}

//     {/* < HookCounter2/> */}
    
//     {/* <HookCounter2 value={2}/> */}

//     {/* < Discount/> */}
//     {/* <EventBind/> */}
    
//     {/* < UserGreeting_f islogged={true}/> */}
//     {/* <NameList/> */}
//     {/* <PostList/> */}
//     {/* <Form/> */}
//     {/* <HookCounter3/> */}
//     {/* <Form_Functional/> */}
//     {/* <Discount_runtime/> */}
//     {/* <UpperToLower/> */}
//     {/* <Shop/> */}
//     {/* <Contact primary={false}/> */}
//     {/* <About/> */}
//     <Router>
//         <nav>
//           <Link to='/'>Home</Link> &nbsp; &nbsp;
//           <Link to ='/about'>About Us</Link>  &nbsp; &nbsp;
//           <Link to ='/contact'>Contact Us</Link>  &nbsp; &nbsp;
//         </nav>
//         <Routes>
//           <Route path ='/' element={<About/>}></Route>
//           <Route path ='/about' element={<About/>}></Route>
//           <Route path ='/contact' element={<Contact/>}></Route>
//         </Routes>
//       </Router>
// </div>

//   // with js
//   // <div className='App'>
//   //   <h1>Good Morning</h1>
//   //   <h2>HELLIIOO</h2>
//   // </div>

//   //without jsx
//   // React.createElement('div',{className:'App'},
//   // React.createElement('h1',null,'Good Morning'),
//   // React.createElement('h2',null,'HELLIIOO')) 
//   );
// }

// //internal Componentsss
// // function Greet1(){
// //   return(
// //     <div>
// //       <h1>Greet,This the 1st child component</h1>
// //     </div>
// //   )
// // }
// // function Greet2(){
// //   return(
// //     <div>
// //       <h1>Greet,This the 2nd child component</h1>
// //     </div>
// //   )
// // }
// export default App;

// import logo from './logo.svg';

// import './App.css';
// import React from "react";
// import About from './components/About';


// import {BrowserRouter as Router, Routes, Route, Link, useParams} from 'react-router-dom'
// import Customerlist from './components/Customerlist';
// import PostForm from './components/PostForm.js';
// import EditUser from './components/EditUser';

// function App() {
//   const Wrapper = (props) => {
//     const params = useParams();
//     return <EditUser {...{...props, match: {params}} } />
//   }
//   return (
//     <div className="App">     
//     <Router>
//       <div className='App'>
//         <nav>
//           <ul>
//             <Link to="/">Home</Link> &nbsp;&nbsp;
//             <Link to="/customers">All Customers</Link> &nbsp;&nbsp;
//             <Link to="/add-customer">Add Customer</Link> &nbsp;&nbsp;           
//             <Link to="/about">About Us</Link> &nbsp;&nbsp;            
//           </ul>
//         </nav>
//         <Routes>
//           <Route exact path="/" element={<About />}></Route>
//           <Route exact path="/customers" element={<Customerlist />}></Route>
//           <Route exact path="/add-customer" element={<PostForm />}></Route>
//           <Route exact path="/edit-customer/:id" element={<Wrapper />}></Route>
//           <Route exact path="/about" element={<About />}></Route>          
//         </Routes>
//       </div>

//     </Router>
      
//     </div>
//   );
// }

//redux


