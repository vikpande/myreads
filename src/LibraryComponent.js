import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import ShelfComponent from './ShelfComponent';

class LibraryComponent extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    moveToShelf: PropTypes.func.isRequired
  }

  render() {
    return (
      <div>
        <header className="title">My Reads</header>

        <ShelfComponent
          title="Currently reading"
          books={this.props.books.filter(book => book.shelf === 'currentlyReading')}
          moveToShelf={this.props.moveToShelf} />
        <ShelfComponent
          title="Want to read"
          books={this.props.books.filter(book => book.shelf === 'wantToRead')}
          moveToShelf={this.props.moveToShelf} />
        <ShelfComponent
          title="Read"
          books={this.props.books.filter(book => book.shelf === 'read')}
          moveToShelf={this.props.moveToShelf} />

        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default LibraryComponent;