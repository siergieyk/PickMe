import React from 'react';
import SkyLight from 'react-skylight';
import './takequiz.css';

class Takequiz extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div>
        <section>
          <button className="quizbutton" onClick={() => this.simpleDialog.show()}>Take The Quiz</button>
        </section>
        <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref} title="QUIZ QUESTIONS">
          <p> Quiz content to be here </p>
          <p> Coming soon </p>
        </SkyLight>
      </div>
    )
  }
}

Takequiz.displayName = 'Takequiz';

export default Takequiz;