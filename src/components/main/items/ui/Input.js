import React from 'react';

class Input {

  constructor(app){
    this.init(app);
  }

  init(app){
    this.app = app;
    this.ui = app.store.ui;
    this.bs = app.store.ui.basicStyle;
    this.func = app.functions;
  }

  inputField(id, type, placeholder, size, value, onChange){
    const inputStyle = {
      width: size[0],
      height: size[1],
      fontSize: size[1],
      fontFamily: 'adobestdb',
      color: this.ui.colors.grey,
      flexShrink: 0
    }
    return(
      <input id={id} type={type} style={inputStyle}
      placeholder={this.func.multiLang(placeholder[0], placeholder[1], placeholder[2])}
      defaultValue={value}
      onChange={onChange}/>
    )
  }

}

export default Input;
