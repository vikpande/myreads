import React, { Component } from 'react';
import BookComponent from './Book';
import PropTypes from 'prop-types';

class ShelfComponent extends Component {
    static propTypes = {
        title : PropTypes.string.isRequired, 
        books : PropTypes.array.isRequired
    }
    render() {
        let {title, books} = this.props
        return (
            <div>
            <h3> {title}</h3>
                {books.map(book=>(
                    <BookComponent key ={book.id}  book= {book}> </BookComponent>
                ))}
            </div>
        )
    }

}
export default ShelfComponent;