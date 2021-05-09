# MyReads: A Book Tracking App.
In the MyReads project, you'll create a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.

<hr>

## Table Of Content:
- [Install And Start](#install_start)
- [App](#app)
- [Shelves](#shelves)
- [Shelf](#shelf)
- [book](#book)
- [Search Page](#searchPage)
- [Signature](#sign)
- [Technologies Used](#tech)
- [Problems](#problems)

<hr>

## <a name="install_start"> Install And Start </a>:
- To Install:
    - npm install
- To Launch:
    - npm/yarn start

<hr>

## <a name="app"> App </a>:
- Updating Book Shelf (onSelectChange)
    - Pass it two values 
        - bookItem->the book data
        - shelf->the shelf name
    - Set the bookItem shelf to the value i sent through (Book Component).
    - To be able to update the database with the new shelf
          - Gonna filter the books array(with the book id) if we found our bookItem inside gonna exclude it from the new array
          - concat the bookItem to the new filtered array
        
- Search Page (onSearchInputChange)
    - Pass it the query(searh query term)
    - Check if the query is empty a message will appear to the user to enter the search query.
    - Enter the search process and call the BooksAPI
        - An error can occur if result not found:
            - Reset the searchResults array and the error message will (0 Results Found!)
        - Call was success with results returned
            - Need to handle if any of the returned result books already in any shelf.
            - Gonna do that by mapping over the searchResults
            - A problem can occur of how to check the books array with the searchResults Array?
            - Could use forEach or map but as i wont use the returned array just the result gonna use forEach
                - The forEach will loop over the books array
                - If any book have the same id as the searchedBook id:
                    - This means the book is already in a shelf
                    - Take this book shelf and set it as the searchResult shelf

<hr>

## <a name="shelves"> Shelves </a>: 
- Contains 3 different shelves:
    - Currently Reading
    - Want To Read
    - Read
- To pass the correct book to each category gonna use a filter fn:
    - books.filter((book)=>book.shelf==='Name of the shelf')

<hr>

## <a name="shelf"> Shelf </a>:
- Mapped over the filtered books i recieved from the (Shelves Component).

<hr>

## <a name="book"> Book </a>:   
- Needed to handle missing books thumbnails and authors
    - For The Author:
        - const authorCheck=book.authors? book.authors: 'None';
            - If the author is found then the name(s) will be returned
            - Else the word 'None' will replace the author name
    
    - For The missing Thumbnail:
        - Imported an image i made to replace the missing book img
            import bookNotFound from '../img/bookNotFound.jpg'
        - const thumbCheck=book.imageLinks? book.imageLinks.thumbnail: bookNotFound;
            - If the image is found->pass it
            - Else replace it with the photo i made

- To monitor the book shelf an onClick event will be added to the container of all the options(select), but as we need to return the book object and the event value we will pass the fn as an arrow fn 
    - onClick={(event)=>{this.onSelectChange(book, event)}}
        - Where event will be used to get the value of the selected option value
    - The "onSelectChange" will be called in render as following:
        - onSelectChange=(book, event)=>
            {
                const {value}=event.target;
                const {onSelectChange}=this.props
                onSelectChange(book,value);
            }


To listen for any changes in bookshelf an onClick event was added to the < select > tag and the value of the option will be passed through the select value
    - onChange={(event) => {this.onSelectChange(book, event);}}

<hr>

## <a name="searchPage"> Search Page </a>:
- To handle empty result error a check was made in the (App Component) to make sure nothing will be sent to the search process if the query is empty.
- To handle books with no author name(authors) and no thumbnail(imageLinks.thumbnail) a check was made at the start of the (Book Component) to pass if exist and if not exist a different term will be sent to the author name, an img will be put at the place of books with no thumbnails.

<hr>

## <a name="sign">Signature</a>

- Used function instead of class as it will be only used to show my signature at the footer

<hr>

## <a name="tech">Technologies Used</a>:
- HTML 
- CSS
- Javascript
    - React Library
- FB (Create React App)
    - Webpack
    - Babel
    - Webpack Dev Server

<hr>

## <a name="problems"> Problems </a>:
Please provide an Authorization header to identify yourself (can be whatever you want) udacity:
Solution(found it on the internet):
- Had to use an extension(ModHeader) to get header.
- Inside the console wrote (Math.random().toString(36).substr(-8)) to generate token
- [screenshot](https://drive.google.com/file/d/11dz946OZQdmMu4NwtCWuQDYWIOFLIFOv/view?usp=sharing)

*** <p style="color:blue">Thanks for your time</p> ***