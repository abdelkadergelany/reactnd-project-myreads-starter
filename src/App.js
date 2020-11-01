import React from 'react'
import { Route } from 'react-router-dom'
 import * as BooksAPI from './BooksAPI'
import './App.css'
import DisplayByCategory from './DisplayByCategory'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  state = {
    books: []
    
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }
  updateBook = (book,shelf)=>{
    this.setState((currentState) => ({books: currentState.books.map((c)=>{
      
       if(c.id === book.id){
         c.shelf = shelf;
       }
      
    
    })}))
    BooksAPI.update(book,shelf)
  }

  render() {
    return (
      <div className="app">
            
            <Route exact path='/' render={() => (
              <DisplayByCategory
                  books={this.state.books}
                onUpdateBook={this.updateBook} 
              /> )} 
            />

            <Route exact path='/search' render={() => (
              <SearchPage
                  books={this.state.books}
                onUpdateBook={this.updateBook} 
              /> )} 
            />
      </div>
    )
  }
}

export default BooksApp
