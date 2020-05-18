import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddPet from "./components/add-pet.component";
import Pet from "./components/pet.component";
import PetsList from "./components/pets-list.component";

import AddUser from "./components/add-user.component";
import User from "./components/user.component";
import UsersList from "./components/users-list.component";

import ImageForm from "./components/image-form";


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
