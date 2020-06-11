import React, { Component } from "react";
import PetDataService from "../services/pet.service";

export default class Pet extends Component {
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
      this.onChangeDogs = this.onChangeDogs.bind(this);
      this.onChangeChildren = this.onChangeChildren.bind(this);
      this.onChangeOther = this.onChangeOther.bind(this);
      this.onChangeFoster = this.onChangeFoster.bind(this);
      this.onChangeAdoption = this.onChangeAdoption.bind(this);
      this.onChangePhone = this.onChangePhone.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangeEnergy = this.onChangeEnergy.bind(this);
      this.onChangeCats = this.onChangeCats.bind(this);
      
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
        email:""
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
  
    onChangeSpecie(e) {
    const specie = e.target.value;
    
    this.setState(prevState => ({
      currentPet: {
        ...prevState.currentPet,
        specie: specie
      }
    }));
  }
    
      onChangeBreed(e) {
    const breed = e.target.value;
    
    this.setState(prevState => ({
      currentPet: {
        ...prevState.currentPet,
        breed: breed
      }
    }));
  }
    
      onChangeAge(e) {
    const age = e.target.value;
    
    this.setState(prevState => ({
      currentPet: {
        ...prevState.currentPet,
        age: age
      }
    }));
  }
    
      onChangeWeight(e) {
    const weight = e.target.value;
    
    this.setState(prevState => ({
      currentPet: {
        ...prevState.currentPet,
        weight: weight
      }
    }));
  }
    
      onChangeCoat(e) {
    const coat = e.target.value;
    
    this.setState(prevState => ({
      currentPet: {
        ...prevState.currentPet,
        coat: coat
      }
    }));
  }
    
      onChangeEnergy(e) {
    const energy = e.target.value;
    
    this.setState(prevState => ({
      currentPet: {
        ...prevState.currentPet,
        energy: energy
      }
    }));
  }
    
      onChangeCats(e) {
    const cats = e.target.value;
    
    this.setState(prevState => ({
      currentPet: {
        ...prevState.currentPet,
        cats: cats
      }
    }));
  }
    
      onChangeDogs(e) {
    const dogs = e.target.value;
    
    this.setState(prevState => ({
      currentPet: {
        ...prevState.currentPet,
        dogs: dogs
      }
    }));
  }
    
      onChangeChildren(e) {
    const children = e.target.value;
    
    this.setState(prevState => ({
      currentPet: {
        ...prevState.currentPet,
        children: children
      }
    }));
  }
    
      onChangeOther(e) {
    const other = e.target.value;
    
    this.setState(prevState => ({
      currentPet: {
        ...prevState.currentPet,
        other: other
      }
    }));
  }
    
      onChangeFoster(e) {
    const foster = e.target.value;
    
    this.setState(prevState => ({
      currentPet: {
        ...prevState.currentPet,
        foster: foster
      }
    }));
  }
    
      onChangeAdoption(e) {
    const adoption = e.target.value;
    
    this.setState(prevState => ({
      currentPet: {
        ...prevState.currentPet,
        adoption: adoption
      }
    }));
  }
    
      onChangePhone(e) {
    const phone = e.target.value;
    
    this.setState(prevState => ({
      currentPet: {
        ...prevState.currentPet,
        phone: phone
      }
    }));
  }
    
      onChangeEmail(e) {
    const email = e.target.value;
    
    this.setState(prevState => ({
      currentPet: {
        ...prevState.currentPet,
        email: email
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
      image: this.state.currentPet.image,
        
        specie: this.state.currentPet.specie,
        breed: this.state.currentPet.breed,
        age: this.state.currentPet.age,
        weight: this.state.currentPet.weight,
        coat: this.state.currentPet.coat,
        energy: this.state.currentPet.energy,
        cats: this.state.currentPet.cats,
        dogs: this.state.currentPet.dogs,
        children: this.state.currentPet.children,
        other: this.state.currentPet.other,
        foster: this.state.currentPet.foster,
        adoption: this.state.currentPet.adoption,
        phone: this.state.currentPet.phone,
        email: this.state.currentPet.email
        
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
      <div >
        {currentPet ? (
          <div style={{padding:'20px',  borderRadius:'10px', background:"#fff",
  border: "solid 2px #000", backgroundColor:"rgba(255,255,255,0.4)", borderColor: "grey", width:'auto'}} className="edit-form">
            <h4>Pet</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentPet.title}
                  onChange={this.onChangeTitle}
                />
              </div>
                <div className="form-group">
              <form onSubmit={this.handleSubmit}>
        <label >
          Owner:
          <select style={{width:'250px'}}className="form-control" value={currentPet.description} onChange={this.onChangeDescription}>
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
          <select style={{width:'250px'}}className="form-control" value={currentPet.specie} onChange={this.onChangeSpecie}>
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
          <select style={{width:'250px'}}className="form-control" value={currentPet.breed} onChange={this.onChangeBreed}>
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
          <select style={{width:'250px'}}className="form-control" value={currentPet.age} onChange={this.onChangeAge}>
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
          <select style={{width:'250px'}}className="form-control" value={currentPet.weight} onChange={this.onChangeWeight}>
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
          <select style={{width:'250px'}}className="form-control" value={currentPet.coat} onChange={this.onChangeCoat}>
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
          <select style={{width:'250px'}}className="form-control" value={currentPet.energy} onChange={this.onChangeEnergy}>
        
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
          <select style={{width:'250px'}}className="form-control" value={currentPet.cats} onChange={this.onChangeCats}>
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
          <select style={{width:'250px'}}className="form-control" value={currentPet.dogs} onChange={this.onChangeDogs}>
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
          <select style={{width:'250px'}}className="form-control" value={currentPet.children} onChange={this.onChangeChildren}>
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
          <select style={{width:'250px'}}className="form-control" value={currentPet.other} onChange={this.onChangeOther}>
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
          <select style={{width:'250px'}}className="form-control" value={currentPet.foster} onChange={this.onChangeFoster}>
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
          <select style={{width:'250px'}}className="form-control" value={currentPet.adoption} onChange={this.onChangeAdoption}>
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
                id="phone"
                required
                value={currentPet.phone}
                onChange={this.onChangePhone}
                name="phone"
              />
            </div>
        
              <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                className="form-control"
                id="email"
                required
                value={currentPet.email}
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
                value={currentPet.image}
                onChange={this.onChangeImage}
                name="image"
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
