import React from 'react';
import {render} from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';
export default class Index extends React.Component{
constructor(){
    super();
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    return(
      <div>

      </div>
    );
  }
}
render(<Index/>,document.getElementById('root'));
