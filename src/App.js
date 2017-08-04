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
  render() {
    return (
      <div>
        <ShelfComponent title= "Currently Reading" books= {this.state.books.filter(book=>book.shelf==="currentlyReading")}/> 
        <ShelfComponent title= "Want to Read" books= {this.state.books.filter(book=>book.shelf==="wantToRead")}/> 
        <ShelfComponent title= "Read" books= {this.state.books.filter(book=>book.shelf==="read")}/> 
      </div>
    );
  }
}

export default App;
