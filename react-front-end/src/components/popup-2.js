import React from 'react';
import SkyLight from 'react-skylight';
import './popup.css';

class PopupContainer2 extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div>
        <section>
          <button className="button" onClick={() => this.simpleDialog.show()}>Neena</button>
        </section>
        <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref} title="Neena's Pet Profile">
          <p> Name: Neena</p>
          <p> Age: 9 years</p>
          <p> Breed: German Shepherd</p>
          <p> Description: Senior Dog</p>
        </SkyLight>
      </div>
    )
  }
}

PopupContainer2.displayName = 'PopupContainer2';

export default PopupContainer2;