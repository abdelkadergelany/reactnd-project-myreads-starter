import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {search}  from './BooksAPI'

 class SearchPage extends Component {

    state = {
        query: '',
        books: []
      }
    
      updateQuery = (query) => {
        this.setState(() => ({
          query: query
        }))
        if(this.state.query.trim()!=='')
        {
        search(this.state.query)
        .then((books) => {
            if(!books.error){
                this.setState(() => ({ 
                    books: books
                  }))
            }
         
        })
    }
      }
    
      clearQuery = () => {
        this.updateQuery('')
      }
    
    render() {

        const { query } = this.state
        const { books, onUpdateBook } = this.props
    
        const showingBooks = query === ''
          ? books
          : books.filter((c) => (
              c.title.toLowerCase().includes(query.toLowerCase())
            ))

        return (
            
        <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className="close-search" >Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"
                value={query}
                onChange={(event) => this.updateQuery(event.target.value)}                
                />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {this.state.books !== undefined && this.state.books.map((book)=>(
                
                <li key={book.id}>
                
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url({book.imageLinks['thumbnail']})` }}></div>
                    <div className="book-shelf-changer">
                      <select 
                   
                      onChange={(event) => onUpdateBook(book,event.target.value)} 
                      >
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

              ))
           
            

              } 
            

              </ol>
            </div>
        </div>
            
        )
    }
}
export default SearchPage