import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import ShelfComponent from './ShelfComponent';

class App extends Component {
  state = {
    books: []
  }
  componentDidMount(){
    BooksAPI.getAll().then(booksfromServer=> this.setState({books:booksfromServer}))
  }
  moveToShelf(book, shelf) {
    BooksAPI.update(book, shelf).then(res =>
      this.setState((prevState) => {
        let { currentlyReading, wantToRead, read } = res;
        let prevBooks = prevState.books;
        prevBooks.forEach(prevBook => {
          if (currentlyReading.find(bid => bid === prevBook.id) !== undefined) {
            prevBook.shelf = 'currentlyReading';
          }
          if (wantToRead.find(bid => bid === prevBook.id) !== undefined) {
            prevBook.shelf = 'wantToRead';
          }
          if (read.find(bid => bid === prevBook.id) !== undefined) {
            prevBook.shelf = 'read';
          }
        });
        return { books: prevBooks };
      })
    );
  }
  render() {
    return (
      <div>
      <header>MyReads</header>
        <ShelfComponent 
        title= "Currently Reading" 
        books= {this.state.books.filter(book=>book.shelf==="currentlyReading")}
        moveToShelf={(book, shelf) => this.moveToShelf(book, shelf)} /> 
        <ShelfComponent title= "Want to Read" 
        books= {this.state.books.filter(book=>book.shelf==="wantToRead")}
        moveToShelf={(book, shelf) => this.moveToShelf(book, shelf)}/> 
        <ShelfComponent title= "Read" 
        books= {this.state.books.filter(book=>book.shelf==="read")}
        moveToShelf={(book, shelf) => this.moveToShelf(book, shelf)}/> 
      </div>
    );
  }
}

export default App;
