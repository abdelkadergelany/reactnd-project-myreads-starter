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
       //after updating a book shelf we modify the state
      let arr = new Array();
      this.state.books.forEach(element => {
        if(element.id===book.id){
           element.shelf = shelf
        }
        arr.push(element)
        
      });
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
