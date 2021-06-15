import React, { Component } from "react";
import "./App.css";
import Search from "./Components/Search/Search";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class App extends Component {
  render() {
    return (
      <>
        <MuiThemeProvider>
          <Search />
        </MuiThemeProvider>
      </>
    );
  }
}

export default App;
