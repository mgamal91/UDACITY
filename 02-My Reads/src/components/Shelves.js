import React, { Component } from "react";
import Shelf from "./Shelf";
import {Link} from 'react-router-dom';

export class Shelves extends Component {
  render() {
    const { books, onSelectChange } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
        <Shelf
          shelfName="Currently Reading"
          books={books.filter((book) => book.shelf === "currentlyReading")}
          onSelectChange={onSelectChange}
        />
        <Shelf
          shelfName="Want To Read"
          books={books.filter((book) => book.shelf === "wantToRead")}
          onSelectChange={onSelectChange}
        />
        <Shelf
          shelfName="Read"
          books={books.filter((book) => book.shelf === "read")}
          onSelectChange={onSelectChange}
        />
          <Link  to="/search"><button className="open-search">Add a Book</button></Link>
      </div>
    );
  }
}

export default Shelves;
