import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
require('./FilterList.scss');
let close = '../../../icons/error.svg';

export default class FilteredItems extends Component {
  constructor() {
    super();
    this.state = {
      chosenItems: []
    };
    this.deleteChosenItem = this.deleteChosenItem.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.chosenItem &&
      (this.state.chosenItems.indexOf(nextProps.chosenItem) === -1) &&
       this.state.chosenItems.length < 5) {
      let chosenItems = this.state.chosenItems;
      chosenItems.push(nextProps.chosenItem);
      this.setState({chosenItems: chosenItems});
    }
  }

  deleteChosenItem(event) {
    const itemToDeleteText = $(event.target).parent().find('.span__item-name').text();
    let chosenItems = this.state.chosenItems;
    chosenItems.splice(chosenItems.indexOf(itemToDeleteText), 1);
    this.setState({chosenItems: chosenItems});
  }
  render() {
    return(
      <div ref="selectedItemsContainer" className="div__output-box">
        {this.state.chosenItems.map((item, index) => {
          return <div draggable="true" key={index}><span className="span__item-name">{item}</span>
          <span className="span__close-button" onClick={this.deleteChosenItem}>X</span>
          </div>
        })}
      </div>
    );
  }
}
