import React, {Component} from 'react';
import $ from 'jquery';
require('./CrossoutInput.scss');

export default class CrossoutInput extends Component {
  constructor() {
    super();
    this.state = {
      crossout: false
    }
    this.crossoutInput = this.crossoutInput.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {
    if(($(event.target).val() === '') && (this.state.crossout)) {
      this.setState({
        crossout: false
      });
    }
  }

  crossoutInput(event) {
    if($(this.refs.crossoutText).val() === '') {
      console.log(1111);
    }
    else {
      let crossout = !this.state.crossout;
      this.setState({
        crossout: crossout
      });
    }
  }
  render() {
    return (
      <div>
        <span
          className={this.state.crossout ? "span__crossout-controller crossout" : "span__crossout-controller"}
          onClick={this.crossoutInput}>x</span>
        <input
          ref="crossoutText"
          type="text"
          placeholder={this.props.placeholder}
          className={this.state.crossout ? "div__card__content__input crossout" : "div__card__content__input"}
          onChange={this.changeHandler}/>
      </div>
    );
  }
}
