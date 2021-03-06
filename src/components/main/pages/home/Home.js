import React from 'react';
import View from 'components/main/pages/home/views/View';

import NavBar from './NavBar';
import Entry from './views/Entry';

class Home extends View {

  componentWillReceiveProps(newProps){
    this.setState({
      view: newProps.app.store.content.view,
      deadView: this.state.view !== newProps.app.store.content.view? this.state.view: this.state.deadView
    });
  }

  views(view, animatedStyle){
    const app = this.app;
    app.animatedStyle = animatedStyle;
    if(view === ''){
      return null;
    }
    switch (view) {
      case 'entry':
        return <Entry app={app}/>;
      default:
        return null;
    }
  }

  render() {
    this.init(this.props);
    const pageStyle = {...this.ui.basicStyle, ...{
      justifyContent: 'flex-start',
      background: 'transparent',
      backgroundSize: '100% 100%',
      position: 'relative'
    }}
    const deadView = this.state.deadView;
    const view = this.state.view;

    return(
      <div style={pageStyle}>
        <NavBar app={this.props.app}/>
        {this.animatedView(this.views.bind(this), deadView? deadView: view, deadView? false: true)}
      </div>
    )
  }
}


export default Home;
