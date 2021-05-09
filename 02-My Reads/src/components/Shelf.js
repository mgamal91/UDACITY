import React, { Component } from "react";
import Book from './Book'

export class Shelf extends Component {
  state = { statusValue: "" };

  render() {
    const { books, shelfName, onSelectChange } = this.props;
    return (
      <div className="bookShelfDiv">
        <h1 className="shelfNameH1">{shelfName}</h1>
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book book={book} onSelectChange={onSelectChange}/>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Shelf;
