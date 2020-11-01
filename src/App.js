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
          books:books
        }))
      })
  }
  updateBook = (book,shelf)=>{
    BooksAPI.update(book,shelf)
       //after updating a book'shelf, we modify the state to incorporate the change
      let arr = new Array();
      let isNewBook = true;
      this.state.books.forEach(element => {
        if(element.id===book.id){
          let isNewBook = false
           element.shelf = shelf
        }
      
        arr.push(element)
        
      });
      if(isNewBook){
        book.shelf = shelf
        arr.push(book)
      }
      this.setState({books:arr})
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
