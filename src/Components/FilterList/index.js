import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
require('./FilterList.scss');
let close = '../../../icons/error.svg';

export default class FilterList extends Component {
  constructor() {
    super();
    this.state = {
      highlighted: null
    };
    this.searchHandler = this.searchHandler.bind(this);
    this.selectItemOnEnter = this.selectItemOnEnter.bind(this);
  }
  shouldComponentUpdate(nextProps, nextState) {
    if(this.state.highlighted === nextState.highlighted){
      return false;
    }
    return true;
  }
  componentDidUpdate() {
    const items = $(ReactDOM.findDOMNode(this.refs.itemList)).find('li');
    const selectedText = this.state.highlighted;
    if(selectedText === null) {
      $(ReactDOM.findDOMNode(this.refs.searchListContainer)).scrollTop(0);
    }
    else {
      let that = this;
      items.each(function(index) {
        if($(this).text() === selectedText) {
          let scrollTo = $(this);
          let container = $(ReactDOM.findDOMNode(that.refs.searchListContainer));
          container.scrollTop(scrollTo.offset().top - container.offset().top + container.scrollTop());
        }
      });
    }
  }

  searchHandler(event) {
    const searchFor = $(ReactDOM.findDOMNode(event.target)).val();
    const items = $(ReactDOM.findDOMNode(this.refs.itemList)).find('li');
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

  selectItemOnEnter(event) {
    if(event.keyCode === 13) {
      if(this.state.highlighted !== null) {
        $(ReactDOM.findDOMNode(this.refs.selectedItemsContainer)).append(
          '<div>' + this.state.highlighted + '<span>X</span></div>'
        );
        this.setState({highlighted: null});
      }
      $(event.target).val('');
    }
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
                  return <li key={index} className="highlight">{item}</li>
                }
                else {
                  return <li key={index}>{item}</li>
                }
              })}
            </ul>
          </div>
        </div>
        <div ref="selectedItemsContainer" className="div__output-box">

        </div>
      </div>
    );
  }
}
