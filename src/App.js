import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import LibraryComponent from './LibraryComponent';
import SearchComponent from './SearchComponent';
import PageNotFoundComponent from './PageNotFoundComponent';
import * as BooksAPI from './BooksAPI';

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
        let {currentlyReading, wantToRead, read} = res;
        let prevBooks = prevState.books;
        if (prevBooks.find(prevBook => prevBook.id === book.id) === undefined) {prevBooks.push(book);
        }
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
          else {prevBooks.shelf = 'none';
        }

        });
        return {books: prevBooks};
        }
      )
    );
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => (
          <LibraryComponent
            books={this.state.books}
            moveToShelf={(book, shelf) => this.moveToShelf(book, shelf)} />
        )} />
        <Route exact path="/search" render={() => (
          <SearchComponent
            booksAlreadyOnShelf={this.state.books}
            moveToShelf={(book, shelf) => this.moveToShelf(book, shelf)} />
        )} />
        <Route component={PageNotFoundComponent} />
      </Switch>
    );
  }
}

export default App;
