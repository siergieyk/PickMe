import React, { Component } from "react";
import UserDataService from "../services/user.service";
import { Link } from "react-router-dom";

import AddUser from "./add-user.component";
import User from "./user.component";



export default class UsersList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveUsers = this.retrieveUsers.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveUser = this.setActiveUser.bind(this);
    this.removeAllUsers= this.removeAllUsers.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      users: [],
      currentUser: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveUsers();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveUsers() {
    UserDataService.getAll()
      .then(response => {
        this.setState({
          users: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveUsers();
    this.setState({
      currentUser: null,
      currentIndex: -1
    });
  }

  setActiveUser(user, index) {
    this.setState({
      currentUser: user,
      currentIndex: index
    });
  }

  removeAllUsers() {
    UserDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchTitle() {
    UserDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          users: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
    
    

  render() {
    const { searchTitle, users, currentUser, currentIndex } = this.state;
      
   

    return (
        

        
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div style={{marginBottom:'20px'}} className="col-md-6">
          <h4>User</h4>

          <ul className="list-group">
            {users &&
              users.map((user, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveUser(user, index)}
                  key={index}
                >
                  {user.title}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllUsers}
          >
            Remove All
          </button>
        </div>
        <div  className="col-md-6">
          {currentUser ? (
            <div style={{padding:'20px',  borderRadius:'10px', background:"#fff",
  border: "solid 2px #000", backgroundColor:"rgba(255,255,255,0.4)", borderColor: "grey", width:'auto'}}>
              <h4>User</h4>
           
                <div>
                <label>
                  <strong>Id:</strong>
                </label>{" "}
                {currentUser.id}
              </div>
           
           
              <div>
                <label>
                  <strong>Title:</strong>
                </label>{" "}
                {currentUser.title}
              </div>
              

            <div>
                <label>
                  <strong>Home:</strong>
                </label>{" "}
                {currentUser.home}
              </div>

            <div>
                <label>
                  <strong>Backyard:</strong>
                </label>{" "}
                {currentUser.backyard}
              </div>

            <div>
                <label>
                  <strong>Work:</strong>
                </label>{" "}
                {currentUser.work}
              </div>

            <div>
                <label>
                  <strong>How much time:</strong>
                </label>{" "}
                {currentUser.time}
              </div>

            <div>
                <label>
                  <strong>Cats:</strong>
                </label>{" "}
                {currentUser.cats}
              </div>

            <div>
                <label>
                  <strong>Dogs:</strong>
                </label>{" "}
                {currentUser.dogs}
              </div>

            <div>
                <label>
                  <strong>Children:</strong>
                </label>{" "}
                {currentUser.children}
              </div>

            <div>
                <label>
                  <strong>Foster:</strong>
                </label>{" "}
                {currentUser.foster}
              </div>

            <div>
                <label>
                  <strong>Adoption:</strong>
                </label>{" "}
                {currentUser.adoption}
              </div>

 

              <Link
                to={"/users/" + currentUser.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a User...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
