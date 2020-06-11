import React, { Component } from "react";
import UserDataService from "../services/user.service";


export default class User extends Component {
  constructor(props) {
    super(props);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
          
      this.onChangeHome = this.onChangeHome.bind(this);
      this.onChangeBackyard = this.onChangeBackyard.bind(this);
      this.onChangeWork = this.onChangeWork.bind(this);
      this.onChangeTime = this.onChangeTime.bind(this);
      this.onChangeCats = this.onChangeCats.bind(this);
      this.onChangeDogs = this.onChangeDogs.bind(this);
      this.onChangeChildren = this.onChangeChildren.bind(this);
      this.onChangeFoster = this.onChangeFoster.bind(this);
      this.onChangeAdoption = this.onChangeAdoption.bind(this);
      
      
    
      
    this.getUser = this.getUser.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);

    this.state = {
      currentUser: {
        id: "",
        title: "",
        description: "",
              published: false,

      submitted: false,
        home: "", 
        backyard: "", 
        work: "", 
        time: "", 
        cats: "", 
        dogs: "", 
        children: "", 
        foster: "", 
        adoption: ""
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getUser(this.props.match.params.id);
  }
    
    onChangeId(e) {
    const id = e.target.value;

    this.setState(function(prevState) {
      return {
        currentUser: {
          ...prevState.currentUser,
          id: id
        }
      };
    });
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function(prevState) {
      return {
        currentUser: {
          ...prevState.currentUser,
          title: title
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentUser: {
        ...prevState.currentUser,
        description: description
      }
    }));
  }

    
      onChangeHome(e) {
    const home = e.target.value;
    
    this.setState(prevState => ({
      currentUser: {
        ...prevState.currentUser,
        home: home
      }
    }));
  }
    
      onChangeBackyard(e) {
    const backyard = e.target.value;
    
    this.setState(prevState => ({
      currentUser: {
        ...prevState.currentUser,
        backyard: backyard
      }
    }));
  }
    
      onChangeWork(e) {
    const work = e.target.value;
    
    this.setState(prevState => ({
      currentUser: {
        ...prevState.currentUser,
        work: work
      }
    }));
  }
    
      onChangeTime(e) {
    const time = e.target.value;
    
    this.setState(prevState => ({
      currentUser: {
        ...prevState.currentUser,
        time: time
      }
    }));
  }
    
      onChangeCats(e) {
    const cats = e.target.value;
    
    this.setState(prevState => ({
      currentUser: {
        ...prevState.currentUser,
        cats: cats
      }
    }));
  }
    
      onChangeDogs(e) {
    const dogs = e.target.value;
    
    this.setState(prevState => ({
      currentUser: {
        ...prevState.currentUser,
        dogs: dogs
      }
    }));
  }
    
      onChangeChildren(e) {
    const children = e.target.value;
    
    this.setState(prevState => ({
      currentUser: {
        ...prevState.currentUser,
        children: children
      }
    }));
  }
    
      onChangeFoster(e) {
    const foster = e.target.value;
    
    this.setState(prevState => ({
      currentUser: {
        ...prevState.currentUser,
        foster: foster
      }
    }));
  }
    
      onChangeAdoption(e) {
    const adoption = e.target.value;
    
    this.setState(prevState => ({
      currentUser: {
        ...prevState.currentUser,
        adoption: adoption
      }
    }));
  }
    

    
    
    
  getUser(id) {
    UserDataService.get(id)
      .then(response => {
        this.setState({
          currentUser: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentUser.id,
      title: this.state.currentUser.title,
      description: this.state.currentUser.description,
      published: status,
        
        home: this.state.currentUser.home,
        backyard: this.state.currentUser.backyard,
        work: this.state.currentUser.work,
        time: this.state.currentUser.time,
        cats: this.state.currentUser.cats,
        dogs: this.state.currentUser.dogs,
        children: this.state.currentUser.children,
        foster: this.state.currentUser.foster,
        adoption: this.state.currentUser.adoption
    };

    UserDataService.update(this.state.currentUser.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentUser: {
            ...prevState.currentUser,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateUser() {
    UserDataService.update(
      this.state.currentUser.id,
      this.state.currentUser
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The user was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteUser() {    
    UserDataService.delete(this.state.currentUser.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/users')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentUser } = this.state;

    return (
        
        
    
        
        
      <div>
        {currentUser ? (
          <div style={{padding:'20px',  borderRadius:'10px', background:"#fff",
  border: "solid 2px #000", backgroundColor:"rgba(255,255,255,0.4)", borderColor: "grey", width:'auto'}} className="edit-form">
            <h4>User</h4>
            <form>
         
            <div className="form-group">
                <label htmlFor="id">ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="id"
                  value={currentUser.id}
                  onChange={this.onChangeId}
                />
              </div>
              
         
         <div className="form-group">
                <label htmlFor="title">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentUser.title}
                  onChange={this.onChangeTitle}
                />
              </div>
        
        
             <div className="form-group">
              <form onSubmit={this.handleSubmit}>
        <label >
          Where do you live?:
          <select style={{width:'250px'}}className="form-control" value={currentUser.home} onChange={this.onChangeHome}>
            <option value="Pick One">Pick One</option>
            <option value="studio">Studio</option>
            <option value="1 bedroom">1 Bedroom Apt</option>
            <option value="2 bedroom">2 Bedroom Apt</option>
        <option value="house">House</option>
          </select>
        </label>
      </form>
        </div>
        
                        <div className="form-group">
              <form onSubmit={this.handleSubmit}>
        <label >
          Do you have a backyard?:
          <select style={{width:'250px'}}className="form-control" value={currentUser.backyard} onChange={this.onChangeBackyard}>
            <option value="Pick One">Pick One</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
      </form>
        </div>
        
                        <div className="form-group">
              <form onSubmit={this.handleSubmit}>
        <label >
          How many hours per week do you work?:
          <select style={{width:'250px'}}className="form-control" value={this.state.work} onChange={this.onChangeWork}>
            <option value="Pick One">Pick One</option>
            <option value="30">up to 30 hours</option>
            <option value="40-50">Full time 40 - 50 hours</option>
            <option value="50+">More than 50 hours</option>
          </select>
        </label>
      </form>
        </div>
        
                        <div className="form-group">
              <form onSubmit={this.handleSubmit}>
        <label >
          How many hours per day can you spend with your pet?:
          <select style={{width:'250px'}}className="form-control" value={this.state.time} onChange={this.onChangeTime}>
        <option value="Pick One">Pick One</option>
            <option value="4">2 to 4 hours</option>
            <option value="6">4 to 6 hours</option>
            <option value="8">6 to 8 hours</option>
            <option value="10">8 to 10 hours</option>
          </select>
        </label>
      </form>
        </div>
        
                        <div className="form-group">
              <form onSubmit={this.handleSubmit}>
        <label >
          Do you have cats?:
          <select style={{width:'250px'}}className="form-control" value={this.state.cats} onChange={this.onChangeCats}>
            <option value="Pick One">Pick One</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
      </form>
        </div>
        
                        <div className="form-group">
              <form onSubmit={this.handleSubmit}>
        <label >
          Do you have dogs?:
          <select style={{width:'250px'}}className="form-control" value={this.state.dogs} onChange={this.onChangeDogs}>
            <option value="Pick One">Pick One</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
      </form>
        </div>
        
                        <div className="form-group">
              <form onSubmit={this.handleSubmit}>
        <label >
          Do you have small children?:
          <select style={{width:'250px'}}className="form-control" value={this.state.children} onChange={this.onChangeChildren}>
            <option value="Pick One">Pick One</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
      </form>
        </div>
        
                        <div className="form-group">
              <form onSubmit={this.handleSubmit}>
        <label >
          Are you looking to foster a pet?:
          <select style={{width:'250px'}}className="form-control" value={this.state.foster} onChange={this.onChangeFoster}>
            <option value="Pick One">Pick One</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="maybe">Maybe</option>
          </select>
        </label>
      </form>
        </div>
        
                        <div className="form-group">
              <form onSubmit={this.handleSubmit}>
        <label >
          Are you looking to adopt a pet?:
          <select style={{width:'250px'}}className="form-control" value={this.state.adoption} onChange={this.onChangeAdoption}>
            <option value="Pick One">Pick One</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="maybe">Maybe</option>
          </select>
        </label>
      </form>
        </div>


            </form>


            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteUser}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateUser}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a User...</p>
          </div>
        )}
      </div>
    );
  }
}
