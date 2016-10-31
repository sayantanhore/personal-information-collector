import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FilteredItems from './FilteredItems';
import $ from 'jquery';
require('./FilterList.scss');
let close = '../../../icons/error.svg';

export default class FilterList extends Component {
  constructor() {
    super();
    this.lastChosenItem = null;
    this.state = {
      highlighted: null
    };
    this.searchHandler = this.searchHandler.bind(this);
    this.selectItemOnEnter = this.selectItemOnEnter.bind(this);
    this.chooseItem = this.chooseItem.bind(this);
  }
  shouldComponentUpdate(nextProps, nextState) {
    if(nextState.lastChosenItem){
      return true;
    }
    if(this.state.highlighted === nextState.highlighted){
      return false;
    }
    return true;
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
      highlighted: highlighted,
      lastChosenItem: null
    });
  }

  selectItemOnEnter(event) {
    if(event.keyCode === 13) {
      if(this.state.highlighted !== null) {
        this.setState({lastChosenItem: this.state.highlighted, highlighted: null});
      }
      $(event.target).val('');
    }
  }

  chooseItem(event) {
    const searchFor = $(event.target).text();
    this.setState({lastChosenItem: searchFor});
  }

  render() {
    return (
      <div className="div__filter-list">
        <div className="div__search-box">
          <input type="text" placeholder="Search here" className="input-text__search"
            onChange={this.searchHandler}
            onKeyDown={this.selectItemOnEnter}/>
          <div ref="searchListContainer" className="div__search-list">
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
        <FilteredItems chosenItem={this.state.lastChosenItem}/>
      </div>
    );
  }
}
