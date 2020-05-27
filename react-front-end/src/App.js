import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';




import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddPet from "./components/add-pet.component";
import Pet from "./components/pet.component";
import PetsList from "./components/pets-list.component";

import AddUser from "./components/add-user.component";
import User from "./components/user.component";
import UsersList from "./components/users-list.component";



import MainPage from "./components/main-page.component";
import LoginPage from "./components/login-page.component";

import { useAuth0 } from './components/auth0-context';



class App extends Component {
  

  render() {
    
    return (

        <Router>

          <div className="container mt-3">
            <Switch>


        <Route exact path="/" component={LoginPage} />
        
        
        <Route exact path="/main" component={MainPage} />
        



        </Switch>
          </div>

      </Router>     
    );
  }
}

export default App;
