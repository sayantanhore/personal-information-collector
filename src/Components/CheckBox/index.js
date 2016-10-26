import React, {Component} from 'react';
import ReactDOM from 'react-dom';
require('./CheckBox.scss');

export default class CheckBox extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="div__checkbox--container">
        <input id={this.props.questionType} type="checkbox" name={this.props.questionType}/>
        <label htmlFor={this.props.questionType} className="label__checkbox">
          {this.props.questionText}
        </label>
      </div>
    );
  }
}
