// Dependencies
import React, { Component } from 'react';
// Externals
import Splash from '../../containers/Splash';
import Menu from '../../containers/Menu';
// Internals
import Wrapper from './styles/Wrapper';


class App extends Component {
  render() {
    return (
      <Wrapper>
        <Splash />
        <Menu />
      </Wrapper>
    );
  }
}

export default App;
