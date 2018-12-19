import React from 'react';

class Button {

  constructor(app){
    this.init(app);
  }

  init(app){
    this.app = app;
    this.ui = app.store.ui;
    this.bs = this.ui.basicStyle;
    this.func = app.functions;
    this.actions = app.actions;
  }

  button(customStyle, text, imageUrl, onClick){
    var style = {...styles.button, ...customStyle }
    if(imageUrl && imageUrl !== ''){
      style = {...style, ...{ backgroundImage: 'url(' + imageUrl + ')' }}
    }
    return(
    <button style={style} onClick={onClick}>
    {this.func.multiLang(text[0],text[1], text[2])}</button>)
  }

}

const styles = {
  button:{
    border: 'none',
    cursor: 'pointer',
    backgroundSize: '100% 100%',
    backgroundColor: 'transparent',
    fontFamily: 'adobestdb',
    fontWeight: 'bold',
    fontSize: '80%',
    color: 'white',
    flexShrink: 0,
    position: 'relative'
  }
}

export default Button;
