import React, { Component } from "react";
import Shelves from "./components/Shelves";
import SearchBar from "./components/SearchBar";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router-dom";
import "./App.css";
import "./myCss.css"
import Signature from "./components/Signature";

export class App extends Component {
  state = { books: [], searchedBooks: [], msg: "Enter Your Search Term!", resetSearch:[] };
  //getAll data
  /* This was re-used from contacts example from classroom */
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books });
      console.log(books);
    });
  }

  /* *************************CheckBookStatus*************************** */
  onSelectChange = (bookItem, shelf) => {
    bookItem.shelf = shelf;
    BooksAPI.update(bookItem, shelf)
      .then(() => {
        this.setState(({ books }) => ({
          /* To be able to update the new shelf
           * Gonna filter the books array if we found our bookItem inside gonna exclude it from the new array
           * concat the bookItem to the new filtered array */
          books: books
            .filter((book) => book.id !== bookItem.id)
            .concat([bookItem]),
        }));
      })
      .then(
        BooksAPI.getAll().then((books) => {
          this.setState(() => ({
            books,
          }));
        })
      );

    console.log(`App:Successful in moving ${bookItem.title} to ${shelf}`);
  };

  /* *****************************Search********************************** */

  onSearchInputChange = (query) => {
    //Start of input the query will be empty so need to do this to stop the search from start on empty query
    const { books } = this.state;
    if (query === "") {
      console.log("App:empty query");
      //update the searchedBooks to be empty once again
      this.setState({ searchedBooks: [], msg: "Enter Your Search Term!" });
    } else {
      BooksAPI.search(query).then((searchResults) => {
        if (searchResults.error) {
          console.log("App:no books found!");
          //reset the searchedBooks array to be empty
          this.setState({ searchedBooks: [], msg: "0 Results Found!" });
        } else {
          //if the book is found in books array that means it is in one of the shelves lets grap the shelf name(as results are coming from the pure data)
          /* map over the search results
          *map(using forEach) over the books array
          *if the id of the book matched the searchResult then get the shelf from book and pass it to the search item  */
          let shelvedBooksArr = searchResults.map((searchResult) => {
            books.forEach((book) => {
              book.id === searchResult.id && (searchResult.shelf = book.shelf);
            });
            return searchResult;
          });
          this.setState({ searchedBooks: shelvedBooksArr, msg: "" });
        }
      });
    }
  };

  onSearchReset = () => {this.setState({searchedBooks:[], msg:"Enter Your Search Term!"})};

  /* ****************************Search Done************************ */

  render() {
    return (
      <div className="app">
        
        <Route exact
          path="/"
          render={() => (
            <Shelves
          books={this.state.books}
          onSelectChange={this.onSelectChange}
        />
          )}
        />

<Route path='/search' render={() => (
          <SearchBar
          books={this.state.searchedBooks}
          onSelectChange={this.onSelectChange}
          onSearchInputChange={this.onSearchInputChange}
          onSearchReset={this.onSearchReset}
          msg={this.state.msg}
        />
      )} />
      <Signature/>
      </div>
    );
  }
}

export default App;
