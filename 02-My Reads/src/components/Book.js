import React from 'react';
import bookNotFound from '../img/bookNotFound.jpg'
class Book extends React.Component
{
    /* Here we pass not just the value of the element where event took place + the book obj(bookItem) as well */
  onSelectChange = (bookItem, event) => {
    //pass to parent(App)
    const {onSelectChange}=this.props;
    //shelf name
    const {value}=event.target;
    onSelectChange(bookItem, value);
    console.log(`Shelf:Successful in moving ${bookItem.title} to ${value}`);
  };

    render()
    {
        const {book}=this.props;
        //check if the returned imageLinks is empty if so use the photo i uploaded
        const thumbCheck=book.imageLinks? book.imageLinks.thumbnail: bookNotFound;
        //Check authorName existance
        const authorCheck=book.authors? book.authors: 'None';
        return(
            <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${thumbCheck})`,
                      
                    }}
                  />
                  <div className="book-shelf-changer">
                  {/* used arrow fn to pass both the event holding the shelf value and the book to onSelectChange */}
                    <select
                      onChange={(event) => {
                        this.onSelectChange(book, event);
                      }}
                      value={book.shelf || 'none'}
                    >
                      <option value="move" disabled>
                        Move to...
                      </option>
                      <option value="currentlyReading">
                        Currently Reading
                      </option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none" >None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{authorCheck}</div>
              </div>
        )
    }
}
export default Book;