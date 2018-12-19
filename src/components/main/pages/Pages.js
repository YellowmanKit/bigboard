import React, { Component } from 'react';

import Login from './login/Login';
import Home from './home/Home';

class Pages extends Component {

  page(){
    const app = this.props.app;
    switch (app.store.main.status) {
      case 'waitForLogin':
        return <Login app={app}/>
      case 'ready':
        return <Home app={app}/>
      default:
        return <div/>
    }
  }

  render() {
    const app = this.props.app;
    return(
      <div style={app.store.ui.basicStyle}>
        {this.page()}
      </div>
    )
  }
}

export default Pages;
