import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar'
import Details from './components/Details'
import Cart from './components/cart'
import Productlist from './components/Productlist'
import Default from './components/Default'
import Modal from './components/Modal'
function App() {
  return (

    <React.Fragment>      
    <Navbar></Navbar>
    <Switch>
      <Route exact path="/" component={Productlist}></Route>
      <Route path="/details" component={Details}></Route>
      <Route path="/cart" component={Cart}></Route>
      <Route component={Default}></Route>
    </Switch>
   
    <Modal></Modal>
    </React.Fragment>

  );
}

export default App;