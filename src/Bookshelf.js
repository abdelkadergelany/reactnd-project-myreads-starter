import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Bookshelf extends Component {
    static propTypes = {
        bookBelonginTo: PropTypes.array.isRequired,
        onUpdateBook: PropTypes.func.isRequired
      }

    render() {
    
        return (
            
            <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.catName}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">

               {this.props.bookBelonginTo.map((book)=>(

                <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url('${book.imageLinks.thumbnail})'` }}></div>
                    <div className="book-shelf-changer">
                      <select 
                      onChange={(event) => this.props.onUpdateBook(book,event.target.value)}
                      defaultValue={book.shelf}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>

        ))}
            

              </ol>
            </div>
          </div>
            
        )
    }
}
