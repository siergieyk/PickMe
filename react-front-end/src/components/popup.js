import React from 'react';
import SkyLight from 'react-skylight';
import './popup.css';

class PopupContainer extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div>
        <section>
          <button className="button" onClick={() => this.simpleDialog.show()}>Sparky</button>
        </section>
        <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref} title="Pet Profile">
          <p> Name: Sparky</p>
          <p> Age: 4 years</p>
          <p> Breed: Chihuahua Mix</p>
          <p> Description: Small Dog</p>
        </SkyLight>
      </div>
    )
  }
}

PopupContainer.displayName = 'PopupContainer';

export default PopupContainer;