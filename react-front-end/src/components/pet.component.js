import React, { Component } from "react";
import PetDataService from "../services/pet.service";

export default class Pet extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.getPet = this.getPet.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updatePet = this.updatePet.bind(this);
    this.deletePet = this.deletePet.bind(this);

    this.state = {
      currentPet: {
        id: null,
        title: "",
        description: "",
        published: false,
        image: ""
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getPet(this.props.match.params.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function(prevState) {
      return {
        currentPet: {
          ...prevState.currentPet,
          title: title
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentPet: {
        ...prevState.currentPet,
        description: description
      }
    }));
  }
    
onChangeImage(e) {
    const image = e.target.value;
    
    this.setState(prevState => ({
      currentPet: {
        ...prevState.currentPet,
        image: image
      }
    }));
  }

  getPet(id) {
    PetDataService.get(id)
      .then(response => {
        this.setState({
          currentPet: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }


      updatePublished(status) {
    var data = {
      id: this.state.currentPet.id,
      title: this.state.currentPet.title,
      description: this.state.currentPet.description,
      published: status,
      image: this.state.currentPet.image
    }; 
  

    PetDataService.update(this.state.currentPet.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentPet: {
            ...prevState.currentPet,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePet() {
    PetDataService.update(
      this.state.currentPet.id,
      this.state.currentPet
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The pet was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deletePet() {    
    PetDataService.delete(this.state.currentPet.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/pets')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentPet } = this.state;

    return (
      <div>
        {currentPet ? (
          <div className="edit-form">
            <h4>Pet</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentPet.title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentPet.description}
                  onChange={this.onChangeDescription}
                />
              </div>
        
            <div className="form-group">
                <label htmlFor="image">Image</label>
                <input
                  type="text"
                  className="form-control"
                  id="image"
                  value={currentPet.image}
                  onChange={this.onChangeImage}
                />
              </div>

            </form>



            <button
              className="badge badge-danger mr-2"
              onClick={this.deletePet}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updatePet}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Pet...</p>
          </div>
        )}
      </div>
    );
  }
}
