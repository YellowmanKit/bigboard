import React from 'react';
import View from 'components/main/pages/home/views/View';

class Entry extends View {

  render() {
    this.init(this.props);
    return(
      <div style={this.viewStyle()}>
        entry
      </div>
    )
  }
}

export default Entry;
