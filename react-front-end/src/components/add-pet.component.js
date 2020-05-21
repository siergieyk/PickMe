import React, { Component } from "react";
import PetDataService from "../services/pet.service";

import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';


const techCompanies = [
  { label: "Apple", value: 1 },
  { label: "Facebook", value: 2 },
  { label: "Netflix", value: 3 },
  { label: "Tesla", value: 4 },
  { label: "Amazon", value: 5 },
  { label: "Alphabet", value: 6 },
];

export default class AddPet extends Component {
    
    
    
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
   this.onChangeImage = this.onChangeImage.bind(this);
    this.savePet = this.savePet.bind(this);
    this.newPet = this.newPet.bind(this);

    this.state = {
      id: null,
      title: "",
      description: "", 
      published: false,
      

      submitted: false,
        image: "",
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

  savePet() {
    var data = {
      title: this.state.title,
      description: this.state.description,
      image: this.state.image
    };

    PetDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published,
    
          submitted: true,
         image: response.data.image
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
      image: ""
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
          <div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
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
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
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
