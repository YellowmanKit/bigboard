import React from 'react';
import UI from 'components/UI';

import icon from 'resources/images/icon/icon_bigboard.png';

class Login extends UI {

  loginArea(){
    const areaSize = [this.bs.width * 0.35, this.bs.width * 0.25];
    const areaStyle = {...this.styles.container, ...this.styles.shadows.basic, ...{
      width: areaSize[0],
      height: areaSize[1],
      backgroundColor: this.ui.colors.white,
      borderRadius: '2%'
    }}
    return(
    <div style={areaStyle}>
      {this.gap('6%')}
      {this.appIcon(areaSize)}
      {this.text('大壁報', [areaSize[0] * 0.5, ''], areaSize[1]* 0.095, this.ui.colors.grey)}
      {this.inputs.inputField('id','text',['Login ID','登入名稱','登入名称'], [areaSize[0] * 0.5, areaSize[1] * 0.05])}
      {this.gap('3%')}
      {this.inputs.inputField('pw','password',['Password','密碼','密码'], [areaSize[0] * 0.5, areaSize[1] * 0.05])}
      {this.gap('6%')}
      {this.loginButton(areaSize)}
    </div>)
  }

  appIcon(areaSize){
    const buttonStyle = {
      width: areaSize[0] * 0.3,
      height: areaSize[1] * 0.3,
      backgroundImage: 'url(' + icon + ')',
      backgroundSize: '100% 100%'
    }
    return <div style={buttonStyle}/>
  }

  loginButton(areaSize){
    const buttonStyle = {...this.styles.shadows.basic, ...{
      width: areaSize[0] * 0.5,
      height: areaSize[1] * 0.075,
      fontSize: areaSize[1] * 0.025,
      backgroundColor: this.ui.colors.cyan,
      borderRadius: '3%'
    }}
    return this.buttons.button(buttonStyle, ['Login','登入','登入'], '', ()=>{ this.login(); })
  }

  render(){
    this.init(this.props);
    return(
      <div style={{...this.bs, ...{ justifyContent: 'center' }}}>
        {this.loginArea()}
      </div>
    )
  }

  login(id, pw){
    const _id = id? id:document.getElementById('id').value;
    const _pw = pw? pw:document.getElementById('pw').value;
    //if(_id.length < 5 || _pw.length < 5){ return; }
    this.props.app.actions.user.login(_id, _pw);
  }

}

export default Login;
