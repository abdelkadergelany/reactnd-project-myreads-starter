import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {search}  from './BooksAPI'
import BookShelfChanger from './BookShelfChanger'

 class SearchPage extends Component {

    state = {
        query: '',
        books: []
      }
    
      updateQuery = (query) => {
        if(this.state.query.trim()==='')
        {
            this.setState({ 
                books: []
              })
        }
        this.setState(() => ({
          query: query
        }))
        if(this.state.query.trim()!=='')
        {
        search(this.state.query)
        .then((books) => {
            
            if(!books.error && books.length!==0){
                this.setState(() => ({ 
                    books: books
                  }))
            }
         
        })
    }
      }
    

    
    render() {
  

        return (
            
        <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className="close-search" >Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"
                value={this.state.query}
                onChange={(event) => this.updateQuery(event.target.value)}                
                />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {this.state.books !== undefined && this.state.books.map((book)=>(
                
                <li key={book.id}>
                {console.log(book)}
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks===undefined?'':book.imageLinks.thumbnail})` }}></div>
                                   
                    <BookShelfChanger book={this.props.book} onUpdateBook={this.props.onUpdateBook}  />

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