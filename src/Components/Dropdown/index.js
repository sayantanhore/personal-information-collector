import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
require('./Dropdown.scss');

export default class Dropdown extends Component {
  constructor() {
    super();
    this.state = {
      listVisible: false,
      highlighted: null
    };
    this.showList = this.showList.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    this.checkForESC = this.checkForESC.bind(this);
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

  showList(event) {
    this.setState({listVisible: true});
  }

  clearSearch(event, found) {
    if(!found) {
      $(event.target).val('');
      this.setState({listVisible: false});
    }
    else {
      this.setState({listVisible: false});
    }
  }

  checkForESC(event) {
    if(event.keyCode === 27) {
      this.clearSearch(event, false);
    }
    else if(event.keyCode === 13) {
      if(!this.state.highlighted) {
        this.clearSearch(event, false);
      }
      else {
        this.clearSearch(event, true);
      }
    }
    else {
      this.setState({listVisible: true});
    }
  }

  searchHandler(event) {
    const searchFor = $(event.target).val();
    const items = $(this.refs.itemList).find('li');
    let that = this;
    let highlighted = null;
    items.each(function(index) {
      if($(this).text() === searchFor) {
        highlighted = searchFor;
      }
    });
    this.setState({
      highlighted: highlighted
    });
  }

  render() {
    return (
      <div className="div__dropdown-list">
        <div className="div__search-box">
          <input type="text"
            placeholder={this.props.placeholder}
            className="input-text__search"
            onClick={this.showList}
            onChange={this.searchHandler}
            onKeyDown={this.checkForESC}
            onBlur={this.clearSearch}
            />
          <div ref="searchListContainer" className={this.state.listVisible ? "div__search-list" : "div__search-list hidden"}>
            <ul ref="itemList">
              {this.props.items.map((item, index) => {
                if(this.state.highlighted === item) {
                  return <li key={index} className="highlight" onClick={this.chooseItem}>{item}</li>
                }
                else {
                  return <li key={index} onClick={this.chooseItem}>{item}</li>
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}