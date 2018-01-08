import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { AppBar } from 'material-ui';
import Question from './Question';
import Regions from './Regions';

const style = {
  width: 700
};

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div id="app">
          <div id="app-header">
            <AppBar title="Countries" />
          </div>
          <div id="main-container" style={style}>
            <Route exact path="/question" component={Question} />
            <Route exact path="/regions" component={Regions} />
          </div>
        </div>
      </MuiThemeProvider>
    </Router>
  </Provider>
);

export default App;
