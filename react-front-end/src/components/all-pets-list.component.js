import React, { Component } from "react";
import PetDataService from "../services/pet.service";
import { Link } from "react-router-dom";
import { StickyContainer, Sticky } from 'react-sticky';
import StickyBox from "react-sticky-box";
import "bootstrap/dist/css/bootstrap.min.css";




export default class PetsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrievePets = this.retrievePets.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActivePet = this.setActivePet.bind(this);
    this.removeAllPets= this.removeAllPets.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      pets: [],
      currentPet: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrievePets();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrievePets() {
    PetDataService.getAll()
      .then(response => {
        this.setState({
          pets: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrievePets();
    this.setState({
      currentPet: null,
      currentIndex: -1
    });
  }

  setActivePet(pet, index) {
    this.setState({
      currentPet: pet,
      currentIndex: index
    });
  }

  removeAllPets() {
    PetDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchTitle() {
    PetDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          pets: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchTitle, pets, currentPet, currentIndex } = this.state;

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
         
        <h4>Pets List</h4>

         
            {pets &&
              pets.map((pet, index) => (
                <div style={{marginBottom:'20px', width:'150px', borderRadius:'25px', background:"#fff",
  border: "solid 2px #000", backgroundColor:"rgba(255,255,255,0.4)", borderColor: "grey"}} 
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActivePet(pet, index)}
                  key={index}
                >
                    <strong><div><label>{pet.title}</label></div></strong>
                    <img style={{height:'50px', borderRadius:'25px'}}src={pet.image} />
              </div>
              ))}
      



        </div>

<div style={{padding:'20px',  borderRadius:'10px', background:"#fff",
  border: "solid 2px #000", backgroundColor:"rgba(255,255,255,0.4)", borderColor: "grey", height:'auto', width:'auto'}} className="col-md-6">
          {currentPet ? (
            <div>
           
 
        
              <h4>Pet</h4>
              <div>
           
           <div>
                <label>
                  <strong>Image:</strong>
                </label>{" "}

<div >                
           
         <StickyBox><img style={{width: '300px', borderRadius:'25px'}} src={currentPet.image} /></StickyBox>
               
               
               
               </div>
              </div>

           
           
           
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentPet.title}
              </div>
              
              

                <div>
                <label>
                  <strong>Descriptiooon:</strong>
                </label>{" "}
                {currentPet.description}
              </div>

                <div>
                <label>
                  <strong>Specie:</strong>
                </label>{" "}
                {currentPet.specie}
              </div>


                <div>
                <label>
                  <strong>Breed:</strong>
                </label>{" "}
                {currentPet.breed}
              </div>

                <div>
                <label>
                  <strong>Age:</strong>
                </label>{" "}
                {currentPet.age}years
              </div>


                <div>
                <label>
                  <strong>Weight:</strong>
                </label>{" "}
                {currentPet.weight}lb
              </div>


                <div>
                <label>
                  <strong>Coat:</strong>
                </label>{" "}
                {currentPet.coat}
              </div>


                <div>
                <label>
                  <strong>Energy Level:</strong>
                </label>{" "}
                {currentPet.energy}
              </div>
   

                <div>
                <label>
                  <strong>Are they good with Cats:</strong>
                </label>{" "}
                {currentPet.cats}
              </div>


                <div>
                <label>
                  <strong>Are they good with Dogs:</strong>
                </label>{" "}
                {currentPet.dogs}
              </div>
              

                <div>
                <label>
                  <strong>Are they good with Children:</strong>
                </label>{" "}
                {currentPet.children}
              </div>


                <div>
                <label>
                  <strong>Are they doog with other people:</strong>
                </label>{" "}
                {currentPet.other}
              </div>


                <div>
                <label>
                  <strong>Are they looking for a foster home? :</strong>
                </label>{" "}
                {currentPet.foster}
              </div>

                  
                <div>
                <label>
                  <strong>Are they looking to be adopted:</strong>
                </label>{" "}
                {currentPet.adoption}
              </div>


                <div>
                <label>
                  <strong>Phone:</strong>
                </label>{" "}
                {currentPet.phone}
              </div>


                <div>
                <label>
                  <strong>Email:</strong>
                </label>{" "}
                {currentPet.email}
              </div>

   </div>
              

            
            
          ) : (
            <div>
              <br />
              <p>Please click on a Pet...</p>
            </div>
          )}
        </div>
      </div>

    );
  }
}
