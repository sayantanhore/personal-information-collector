import React, {Component} from 'react';
import {store} from '../../store';
import Dropdown from '../../Components/Dropdown';

require('./book.scss');

export default class Book extends Component {
  constructor() {
    super();
    this.state = {selectedGenre: null};
    this.loadSubGenres = this.loadSubGenres.bind(this);
  }

  loadSubGenres(selectedGenre) {
    this.setState({selectedGenre: selectedGenre});
  }

  render() {
    return (
      <div>
        <Dropdown items={_.keys(store.genres)} onSelectGenre={this.loadSubGenres}  placeholder={this.props.book + ": Select a genre"}/>
        <Dropdown items={store.genres[this.state.selectedGenre]} placeholder={this.props.book + ": Select a sub genre"}/>
        <input type="text" placeholder="Number of books from the above genre" className="div__card__content__input"></input>
      </div>
    );
  }
}
