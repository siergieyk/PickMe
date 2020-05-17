import React, { Component } from "react";
import ImageUploader from 'react-images-upload';


export default class ImageForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
    }
    onDrop(pictureFiles, pictureDataURLs) {
        this.setState({
            pictures: pictureFiles
        });
    }

    render() {
      return (
        <div className="imageUpload">
            <header className="AppHeader">
                <h1 className="AppTitle">Yoz React Upload Page</h1>
            </header>

            <ImageUploader
            withIcon={true}
            buttonText='Choose images'
            onChange={this.onDrop}
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            maxFileSize={5242880}
            />

        </div>

    

        
      );
    }
  }
  