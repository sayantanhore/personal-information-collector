import React, {Component} from 'react';
import $ from 'jquery';
import {store} from '../../store';
require('./Header.scss');

export default class Header extends Component {
  constructor() {
    super();
    this.navigate = this.navigate.bind(this);
    this.setLinkActiveStatus = this.setLinkActiveStatus.bind(this);
  }

  setLinkActiveStatus() {
    const activePageAt = store.pages.indexOf(store.activePage);
    if(activePageAt === 0) {
      this.setState({previousInactive: true});
      this.setState({nextInactive: false});
    }
    else if(activePageAt === (store.pages.length - 1)) {
      this.setState({previousInactive: false});
      this.setState({nextInactive: true});
    }
  }

  componentWillMount() {
    this.setLinkActiveStatus();
  }

  componentWillReceiveProps(nextProps) {
    this.setLinkActiveStatus();
  }

  componentDidUpdate() {
    if(this.state.nextInactive) {
      $(this.refs.nextandsubmit).text('Submit');
    }
    else {
      $(this.refs.nextandsubmit).text('Next');
    }
  }

  navigate(event) {
    const navigateTo = $(event.target).text();
    const pages = store.pages;
    const activePageAt = pages.indexOf(store.activePage);
    console.log(activePageAt);

    if(navigateTo === 'Previous') {
      if(activePageAt === 0) {
        return;
      }
      store.activePage = pages[activePageAt - 1];
      this.props.setActivePage(store.activePage);
    }
    else if ((navigateTo === 'Next') || (navigateTo === 'Submit')) {
      if(activePageAt === store.pages.length - 1) {
        return;
      }
      store.activePage = pages[activePageAt + 1];
      this.props.setActivePage(store.activePage);
    }
  }

  render() {
    return (
      <div className="div__page-header">
        <div className="div__page-header__title">Find Your Dream Job</div>
        <div className="div__page-header__actions">
          <span className={this.state.previousInactive ? "inactive" : ""} onClick={this.navigate}>Previous</span>
          <span ref="nextandsubmit" className={this.state.nextInactive ? "submit" : ""} onClick={this.navigate}>Next</span>
        </div>
      </div>
    );
  }
}
