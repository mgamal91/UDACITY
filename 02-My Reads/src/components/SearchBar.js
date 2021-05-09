import React, { Component } from "react";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";

export class SearchBar extends Component {
  state = { term: "" };
  //Reset Search at first render
  componentDidMount() {
    this.props.onSearchReset();
  }

  /* Search Handle */
  onSearchInputChange = (event) => {
    const { value } = event.target;
    const { onSearchInputChange } = this.props;
    if (value !== "") {
      this.setState({ term: value });
      onSearchInputChange(value);
      //console.log(`SearchBar:You searched for:${this.state.term}`)
      console.log(`SearchBar:You searched for:${value}`);
    } else {
      onSearchInputChange("");
      this.setState({ term: "" });
    }
  };
  render() {
    const { books, onSelectChange, msg } = this.props;
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                value={this.state.term}
                onChange={this.onSearchInputChange}
                placeholder="Search by title or author"
              />
            </div>
          </div>
          <div className="search-books-results">
            <Shelf
              shelfName="Search Results:"
              books={books}
              onSelectChange={onSelectChange}
            />
          </div>
        </div>
        <h1 className="searchMsgH1">{msg}</h1>
      </div>
    );
  }
}

export default SearchBar;
