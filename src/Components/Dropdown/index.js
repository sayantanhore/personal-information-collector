import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
require('./Dropdown.scss');

export default class Dropdown extends Component {
  constructor() {
    super();
    this.state = {
      listVisible: false,
      highlighted: null,
      lastSelectedItem: null
    };
    this.showList = this.showList.bind(this);
    this.hideList = this.hideList.bind(this);
    this.selectItemFromMenu = this.selectItemFromMenu.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
    this.checkForESCOrEnter = this.checkForESCOrEnter.bind(this);
    this.lostFocusHandler = this.lostFocusHandler.bind(this);
  }

  hideList() {
    if(this.props.onSelectGenre) {
      this.props.onSelectGenre($(this.refs.searchinput).val());
    }
    this.setState({listVisible: false});
  }

  showList() {
    this.setState({listVisible: true});
  }

  lostFocusHandler(event) {
    if(!this.selectedItem) {
      $(this.refs.searchinput).val('');
    }
    else {
      $(this.refs.searchinput).val(this.selectedItem);
    }
    this.hideList();
  }

  checkForESCOrEnter(event) {
    if(event.keyCode === 27) {
      $(this.refs.searchinput).val('');
      this.selectedItem = null;
      this.setState({highlighted: null});
      this.hideList();
    }
    else if(event.keyCode === 13) {
      if(!this.state.highlighted) {
        $(this.refs.searchinput).val('');
      }
      this.hideList();
    }
  }

  searchHandler(event) {
    this.showList();
    const keyCode = event.keyCode;
    const searchText = $(event.target).val();
    const items = $(this.refs.itemList).find('li');
    let highlighted = null;
    items.each(function(index) {
      if($(this).text() === searchText) {
        highlighted = searchText;
      }
    });
    this.selectedItem = highlighted;
    this.setState({highlighted: highlighted});
  }

  selectItemFromMenu(event) {
    let selectedItem = $(event.target).text();
    $(this.refs.searchinput).val(selectedItem);
    this.selectedItem = selectedItem;
    this.hideList();
  }

  componentDidUpdate() {
    const items = $(this.refs.itemList).find('li');
    const selectedText = this.state.highlighted;
    if(selectedText === null) {
      $(this.refs.searchListContainer).scrollTop(0);
    }
    else {
      let that = this;
      items.each(function(index) {
        if($(this).text() === selectedText) {
          let scrollTo = $(this);
          let container = $(that.refs.searchListContainer);
          container.scrollTop(scrollTo.offset().top - container.offset().top + container.scrollTop());
        }
      });
    }
  }

  render() {
    return (
      <div className="div__dropdown-list" >
        <div
          className="div__search-box">
          <input type="text"
            ref="searchinput"
            placeholder={this.props.placeholder}
            className="input-text__search"
            onClick={this.showList}
            onChange={this.searchHandler}
            onKeyDown={this.checkForESCOrEnter}
            onBlur={this.lostFocusHandler} />
          <div ref="searchListContainer" className={this.state.listVisible ? "div__search-list" : "div__search-list hidden"}>
            <ul ref="itemList">
              {this.props.items ? this.props.items.map((item, index) => {
                if(this.state.highlighted === item) {
                  return <li key={index} className="highlight" onMouseDown={this.selectItemFromMenu}>{item}</li>
                }
                else {
                  return <li key={index} onMouseDown={this.selectItemFromMenu}>{item}</li>
                }
              }): <li></li>}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
