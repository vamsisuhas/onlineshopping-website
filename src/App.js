import React, { useEffect } from "react";
import './App.css';
import Checkout from "./Checkout";
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Orders from "./Orders";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51LBEnTSHwAWSpySpx77Sh8DZiuPHb9HiwPDKBYiCOf1ce53mjV4YFbohsN8OuK0i2C7rqMY70AciDq0CTcDrxwPk004TIJ9XMe");

function App() {
    const[{},dispatch] = useStateValue();

    useEffect(() => {
      // will only run once when the app component loads...
  
      auth.onAuthStateChanged((authUser) => {
        console.log("THE USER IS >>> ", authUser);
  
        if (authUser) {
          // the user just logged in / the user was logged in
  
          dispatch({
            type: "SET_USER",
            user: authUser,
          });
        } else {
          // the user is logged out
          dispatch({
            type: "SET_USER",
            user: null,
          });
        }
      });
    }, []);
    
  return (
    <Router>
    <div className="App">
      
     <Routes>

       <Route path="orders" element={<div><Header/><Orders/></div>}/>

       <Route path="/login" element={<Login/>}/>

       <Route path="/checkout" element={<Checkout/>}/>
        
       <Route path="/" element={<div><Header/><Home/></div>}/>

       <Route path="/payment" element={<div><Header/><Elements stripe={promise}><Payment/></Elements></div>}/>
    
      </Routes>
    
     </div>
    </Router> 
    
  );
}

export default App;
