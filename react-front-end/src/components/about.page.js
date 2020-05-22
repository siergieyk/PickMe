import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default class About extends Component {
    
    render(){
        return(
    <div style={{padding:'20px',  borderRadius:'10px', background:"#fff",
  border: "solid 2px #000", backgroundColor:"rgba(255,255,255,0.4)", borderColor: "grey"}}> 
    <h1>About PickMe</h1>
            
   
            <p>PickMe is going to be an application that will help match an adopter with their perfect pet. A lot of times people go to the shelter and adopt a pet purely based on their looks. The user will fill out information about themselves, for example like their work schedule, ideal pet's energy level, if they live in a house or apartment, etc. Based on the information they provide, users will receive pet recommendations.</p>

<p>For example, John lives in a studio apartment and works 8 hours a day. Because of that, all the large dogs over 50lb will be removed from the recommendations, since most of the apartments do not allow large dogs, and a small studio apartment won't be suitable for a large dog.</p>

<p>The main goal of this app is to help place pets in good homes.</p>
            </div>
)}};