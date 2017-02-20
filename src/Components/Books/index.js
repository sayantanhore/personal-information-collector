import React, {Component} from 'react';
import Book from '../Book';
require('./books.scss');

export default class Books extends Component {
  render() {
    return (
      <div className="div__card__content__heading">
        <div>Choose 3 book geners and number of books in each genre you read</div>
        {this.props.books.map((book, index) => {
          return (
            <Book book={book} key={index} />
          )
        })}
      </div>
    );
  }
}
