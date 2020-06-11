import React, { Component } from "react";
import UserDataService from "../services/user.service";
import LoginPage from "./login-page.component";



export default class AddUser extends Component {
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
      
    this.saveUser = this.saveUser.bind(this);
    this.newUser = this.newUser.bind(this);

    this.state = {
      id: "siergieyk@gmail.com",
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
    };
  }

    
onChangeId(e) {
    this.setState({
      id: e.target.value
    });
  }
    
  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }
    
      onChangeHome(e) {
    this.setState({
      home: e.target.value
    });
  }
      onChangeBackyard(e) {
    this.setState({
      backyard: e.target.value
    });
  }
      onChangeWork(e) {
    this.setState({
      work: e.target.value
    });
  }
      onChangeTime(e) {
    this.setState({
      time: e.target.value
    });
  }
      onChangeCats(e) {
    this.setState({
      cats: e.target.value
    });
  }
      onChangeDogs(e) {
    this.setState({
      dogs: e.target.value
    });
  }
      onChangeChildren(e) {
    this.setState({
      children: e.target.value
    });
  }
      onChangeFoster(e) {
    this.setState({
      foster: e.target.value
    });
  }
      onChangeAdoption(e) {
    this.setState({
      adoption: e.target.value
    });
  }

  saveUser() {
    var data = {
      id: this.state.id,
      title: this.state.title,
      description: this.state.description,
        
        home: this.state.home,
        backyard: this.state.backyard,
        work: this.state.work,
        time: this.state.time,
        cats: this.state.cats,
        dogs: this.state.dogs,
        children: this.state.children,
        foster: this.state.foster,
        adoption: this.state.adoption
    };

    UserDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published,
            
            home: response.data.home,
            backyard: response.data.home,
            work: response.data.work,
            time: response.data.time,
            cats: response.data.cats,
            dogs: response.data.dogs,
            children: response.data.children,
            foster: response.data.foster,
            adoption: response.data.adoption,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newUser() {
    this.setState({
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
        
        
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newUser}>
              Add
            </button>
          </div>
        ) : (
          <div style={{padding:'20px',  borderRadius:'10px', background:"#fff",
  border: "solid 2px #000", backgroundColor:"rgba(255,255,255,0.4)", borderColor: "grey", width:'auto'}}>

            <div className="form-group">
              <label htmlFor="id">ID</label>
              <input
                type="text"
                className="form-control"
                id="id"
                required
                value="siergieyk@gmail.com"
                onChange="siergieyk@gmail.com"
                name="id"
              />
            </div>
        
        
        
            <div className="form-group">
              <label htmlFor="title">Name</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

        
                        <div className="form-group">
              <form onSubmit={this.handleSubmit}>
        <label >
          Where do you live?:
          <select style={{width:'250px'}}className="form-control" value={this.state.home} onChange={this.onChangeHome}>
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
          Specie:
          <select style={{width:'250px'}}className="form-control" value={this.state.backyard} onChange={this.onChangeBackyard}>
            <option value="Pick One">Pick One</option>
            <option value="other">Other</option>
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
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
        
        

            <button onClick={this.saveUser} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
  

  
}





