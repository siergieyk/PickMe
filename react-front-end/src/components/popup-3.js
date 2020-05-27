import React from 'react';
import SkyLight from 'react-skylight';
import './popup.css';

class PopupContainer3 extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div>
        <section>
          <button className="button" onClick={() => this.simpleDialog.show()}>Mishka</button>
        </section>
        <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref} title="Mishka's Pet Profile">
          <p> Name: Mishka</p>
          <p> Age: 5 Months</p>
          <p> Breed: German Shepherd</p>
          <p> Description: Senior Dog</p>
        </SkyLight>
      </div>
    )
  }
}

PopupContainer3.displayName = 'PopupContainer3';

export default PopupContainer3;