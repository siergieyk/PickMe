import React, { Component } from "react";

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';

import PopupContainer from './popup';
import PopupContainer2 from './popup-2';
import PopupContainer3 from './popup-3';
import Takequiz from './takequiz';
import './pickme.css';



class Pickme extends Component {
  

    render() {
      
      return (
      
      <main>
              <Jumbotron>
                <h1> Lets Match You With the Perfect Pet!</h1>
                <p>
                  PickMe evaluates your lifestyle, personality, and preferences to generate a list of companions that are suitable for you.
                </p>
                <p> Take our interactive new quiz to find the perfect dog to adopt!</p>
                <p>
                  <Takequiz/>
                </p>
              </Jumbotron>
        
              <Container>
                <Row>
  
                  <Col xs={6} md={4}>
                  <Card>
                <Image style={{ height:'250px', display:'flex', justifyContent:'center', alignItems:'center', overflow:'hidden'}} className="petimg" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg" rounded />
                    <Card.Body>
                        <PopupContainer2/>
                    </Card.Body>
                  </Card>
                  </Col>

                  <Col xs={6} md={4}>
                  <Card>
                    <Image style={{ height:'250px', display:'flex', justifyContent:'center', alignItems:'center', overflow:'hidden'}} className="petimg" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg" rounded />
                    <Card.Body>
                        <PopupContainer3/>
                    </Card.Body>
                  </Card>
                  </Col>

                  <Col xs={6} md={4}>
                  <Card>
                    <Image style={{ height:'250px', display:'flex', justifyContent:'center', alignItems:'center', overflow:'hidden'}} className="petimg" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/smartest-dog-breeds-1553287693.jpg" rounded />
                    <Card.Body>
                        <PopupContainer/>
                    </Card.Body>
                  </Card>
                  </Col>

                </Row>

                <Row>
                  <Col xs={6} md={4}>
                    <Card>
                    <Image src="https://picsum.photos/300/300" rounded />
                    <Card.Body>
                        <PopupContainer/>
                    </Card.Body>
                    </Card>
                  </Col>
                  
                  <Col xs={6} md={4}>
                  <Card>
                    <Image src="https://picsum.photos/300/300" rounded />
                    <Card.Body>
                        <PopupContainer/>
                    </Card.Body>
                  </Card>
                  </Col>

                  <Col xs={6} md={4}>
                  <Card>
                    <Image src="https://picsum.photos/300/300" rounded />
                    <Card.Body>
                        <PopupContainer/>
                    </Card.Body>
                  </Card>
                  </Col>
                </Row>

                <Row>
                  <Col xs={6} md={4}>
                    <Card>
                      <Image src="https://picsum.photos/300/300" rounded />
                      <Card.Body>
                        <PopupContainer/>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col xs={6} md={4}>
                    <Card>
                      <Image src="https://picsum.photos/300/300" rounded />
                      <Card.Body>
                        <PopupContainer/>
                      </Card.Body>
                    </Card>
                  </Col>
                  
                  <Col xs={6} md={4}>
                    <Card>
                      <Image src="https://picsum.photos/300/300" rounded />
                      <Card.Body>
                        <PopupContainer/>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>  
              </Container>
            
        </main>
    
      );
    }
  }
  
  export default Pickme;
  