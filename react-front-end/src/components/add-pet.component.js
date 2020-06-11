import React, { Component } from "react";
import PetDataService from "../services/pet.service";

import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';



export default class AddPet extends Component {
    
    
    
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
   this.onChangeImage = this.onChangeImage.bind(this);
      this.onChangeSpecie = this.onChangeSpecie.bind(this);
      
      this.onChangeBreed = this.onChangeBreed.bind(this);
      this.onChangeAge = this.onChangeAge.bind(this);
      this.onChangeWeight = this.onChangeWeight.bind(this);
      this.onChangeCoat = this.onChangeCoat.bind(this);
      this.onChangeEnergy = this.onChangeEnergy.bind(this);
      this.onChangeCats = this.onChangeCats.bind(this);
      this.onChangeDogs = this.onChangeDogs.bind(this);
      this.onChangeChildren = this.onChangeChildren.bind(this);
      this.onChangeOther = this.onChangeOther.bind(this);
      this.onChangeFoster = this.onChangeImage.bind(this);
      this.onChangeAdoption = this.onChangeAdoption.bind(this);
      this.onChangePhone = this.onChangePhone.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      
    this.savePet = this.savePet.bind(this);
    this.newPet = this.newPet.bind(this);

    this.state = {
      id: null,
      title: "",
      description: "", 
      published: false,
      

      submitted: false,
        image: "",
        specie:"",
        
        breed:"",
        age:"",
        weight:"",
        coat:"",
        energy:"",
        cats:"",
        dogs:"",
        children:"",
        other:"",
        foster:"",
        adoption:"",
        phone:"",
        email:"",
    };
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
    
      onChangeImage(e) {
    this.setState({
      image: e.target.value
    });
  }
    
    onChangeSpecie(e) {
    this.setState({
      specie: e.target.value
    });
  }
    
        onChangeBreed(e) {
    this.setState({
      breed: e.target.value
    });
  }
    
        onChangeAge(e) {
    this.setState({
      age: e.target.value
    });
  }
    
        onChangeWeight(e) {
    this.setState({
      weight: e.target.value
    });
  }
    
        onChangeCoat(e) {
    this.setState({
      coat: e.target.value
    });
  }
    
        onChangeEnergy(e) {
    this.setState({
      energy: e.target.value
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
    
        onChangeOther(e) {
    this.setState({
      other: e.target.value
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
    
        onChangePhone(e) {
    this.setState({
      phone: e.target.value
    });
  }
    
        onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
    
    

  savePet() {
    var data = {
      title: this.state.title,
      description: this.state.description,
      image: this.state.image,
        specie: this.state.specie,
        
        breed: this.state.breed,
        age: this.state.age,
        weight: this.state.weight,
        coat: this.state.coat,
        energy: this.state.energy,
        cats: this.state.cats,
        dogs: this.state.dogs,
        children: this.state.children,
        other: this.state.other,
        foster: this.state.foster,
        adoption: this.state.adoption,
        phone: this.state.phone,
        email: this.state.email
    };

    PetDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published,
    
          submitted: true,
         image: response.data.image,
            specie: response.data.specie,
            
            breed: response.data.breed,
            age: response.data.age,
            weight: response.data.weight,
            coat: response.data.coat,
            energy: response.data.energy,
            cats: response.data.cats,
            dogs: response.data.dogs,
            children: response.data.children,
            other: response.data.other,
            foster: response.data.foster,
            adoption: response.data.adoption,
            phone: response.data.phone,
            email: response.data.email
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newPet() {
    this.setState({
      id: null,
      title: "",
      description: "",
      published: false,

      submitted: false,
      image: "",
        specie:"",
        
        breed:"",
        age:"",
        weight:"",
        coat:"",
        energy:"",
        cats:"",
        dogs:"",
        children:"",
        other:"",
        foster:"",
        adoption:"",
        phone:"",
        email:"",
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newPet}>
              Add
            </button>
          </div>
        ) : (
          <div style={{padding:'20px',  borderRadius:'10px', background:"#fff",
  border: "solid 2px #000", backgroundColor:"rgba(255,255,255,0.4)", borderColor: "grey", width:'auto'}}>
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
          Owner:
          <select style={{width:'250px'}}className="form-control" value={this.state.description} onChange={this.onChangeDescription}>
            <option value="Pick One">Pick One</option>
         <option value="siergieyk@gmail.com">siergieyk@gmail.com</option>
          </select>
        </label>
      </form>
        </div>
        
                <div className="form-group">
              <form onSubmit={this.handleSubmit}>
        <label >
          Specie:
          <select style={{width:'250px'}}className="form-control" value={this.state.specie} onChange={this.onChangeSpecie}>
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
          Breed:
          <select style={{width:'250px'}}className="form-control" value={this.state.breed} onChange={this.onChangeBreed}>
            <option value="grapefruit">Pick One</option>
            <option value="German Shepherd">German Shepherd</option>
            <option value="Husky">Huksy</option>
            <option value="Pomeranian">Pomeranian</option>
        <option value="Persian cat">Persian Cat</option>
        <option value="Bengal cat">Bengal cat</option>
        <option value="Siamese cat">Siamese cat</option>
          </select>
        </label>
      </form>
        </div>
        
                        <div className="form-group">
              <form onSubmit={this.handleSubmit}>
        <label >
          Age:
          <select style={{width:'250px'}}className="form-control" value={this.state.age} onChange={this.onChangeAge}>
            <option value="Pick One">Pick One</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        <option value="5">5</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
          </select>
        </label>
      </form>
        </div>
        
                        <div className="form-group">
              <form onSubmit={this.handleSubmit}>
        <label >
          Weight:
          <select style={{width:'250px'}}className="form-control" value={this.state.weight} onChange={this.onChangeWeight}>
        <option value="Pick One">Pick One</option>    
        <option value="Less than 10">Less than 10</option>
            <option value="10 to 25">10 to 25</option>
            <option value="25 to 50">25 to 50</option>
            <option value="More than 50">More than 50</option>
          </select>
        </label>
      </form>
        </div>
        
                        <div className="form-group">
              <form onSubmit={this.handleSubmit}>
        <label >
          Coat:
          <select style={{width:'250px'}}className="form-control" value={this.state.coat} onChange={this.onChangeCoat}>
            <option value="white">White</option>
            <option value="brown">Brown</option>
            <option value="grey">Grey</option>
            <option value="black">Black</option>
          </select>
        </label>
      </form>
        </div>
        
                        <div className="form-group">
              <form onSubmit={this.handleSubmit}>
        <label >
          How much attention I will need:
          <select style={{width:'250px'}}className="form-control" value={this.state.energy} onChange={this.onChangeEnergy}>
        
        <option value="Pick One">Pick One</option>
        
            <option value="Around 1 hour">Around 1 hour</option>
            <option value="Around 2 hours">Around 2 hours</option>
            <option value="Around 3 hours">Around 3 hours</option>
            <option value="Around 4 hours">Around 4 hours</option>
          </select>
        </label>
      </form>
        </div>
        
                        <div className="form-group">
              <form onSubmit={this.handleSubmit}>
        <label >
          Am I good with cats?:
          <select style={{width:'250px'}}className="form-control" value={this.state.cats} onChange={this.onChangeCats}>
            <option value="Pick One">Pick One</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="not sure">Not Sure</option>
          </select>
        </label>
      </form>
        </div>
        
                        <div className="form-group">
              <form onSubmit={this.handleSubmit}>
        <label >
          Am I good with dogs?:
          <select style={{width:'250px'}}className="form-control" value={this.state.dogs} onChange={this.onChangeDogs}>
            <option value="Pick One">Pick One</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="not sure">Not Sure</option>
          </select>
        </label>
      </form>
        </div>
        
                        <div className="form-group">
              <form onSubmit={this.handleSubmit}>
        <label >
          Am I good with children?:
          <select style={{width:'250px'}}className="form-control" value={this.state.children} onChange={this.onChangeChildren}>
            <option value="Pick One">Pick One</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="not sure">Not Sure</option>
          </select>
        </label>
      </form>
        </div>
        
                        <div className="form-group">
              <form onSubmit={this.handleSubmit}>
        <label >
          Am I good with other people?:
          <select style={{width:'250px'}}className="form-control" value={this.state.other} onChange={this.onChangeOther}>
                        <option value="Pick One">Pick One</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="not sure">Not Sure</option>
          </select>
        </label>
      </form>
        </div>
        
                        <div className="form-group">
              <form onSubmit={this.handleSubmit}>
        <label >
          Am I looking for a foster home?:
          <select style={{width:'250px'}}className="form-control" value={this.state.foster} onChange={this.onChangeFoster}>
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
          Am I looking to be adopted?:
          <select style={{width:'250px'}}className="form-control" value={this.state.adoption} onChange={this.onChangeAdoption}>
            <option value="Pick One">Pick One</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
      </form>
        </div>
        
            <div className="form-group">
              <label htmlFor="phone">Phone number:</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.phone}
                onChange={this.onChangePhone}
                name="phone"
              />
            </div>
        
              <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.email}
                onChange={this.onChangeEmail}
                name="email"
              />
            </div>
        
        
        

    
 
        

        
                <div className="form-group">
              <label htmlFor="image">Image</label>
              <input
                type="text"
                className="form-control"
                id="image"
                required
                value={this.state.image}
                onChange={this.onChangeImage}
                name="image"
              />
            </div>

            <button onClick={this.savePet} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
