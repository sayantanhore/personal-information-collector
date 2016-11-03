import React, {Component} from 'react';
import $ from 'jquery';
require('./Header.scss');

export default class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="div__page-header">
        <div className="div__page-header__title">Find Your Dream Job</div>
        <div className="div__page-header__actions">
          <span>Previous</span>
          <span>Next</span>
        </div>
      </div>
    );
  }
}
