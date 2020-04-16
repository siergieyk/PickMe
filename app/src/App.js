import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography';
import NavBar from './components/navbar';
import Users from './components/users';


class App extends Component {
  render() {
    return (
      <div>
        <AppBar color="primary" position="static">
          <Toolbar>
            <TypoGraphy variant="title"color="inherit"><h1>PickMe</h1></TypoGraphy>
            <NavBar/>
          </Toolbar>
        </AppBar>
        <div
        style={{margin:'5%'}}>
        <Users/>
        
        </div>
        
      </div>
    );
  }
}
export default App;