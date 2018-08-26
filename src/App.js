import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './examples/Home';
import CompoundComponent from './examples/CompoundComponent';
import CompoundComponentWithContext from './examples/CompoundComponentWithContext';
import RenderProps from './examples/RenderProps';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/compoundcomponent" component={CompoundComponent} />
          <Route path="/compoundcomponentcontext" component={CompoundComponentWithContext} />
          <Route path="/renderprops" component={RenderProps} />
        </Switch>
      </Router>
    );
  }
}

export default App;
