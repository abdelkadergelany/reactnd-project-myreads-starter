import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

 class DisplayByCategory extends Component {
    render() {
 
      
        return (
      
         <div className="list-books">
            <div className="list-books-title">
               <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
               <div>
              
                 <Bookshelf onUpdateBook={this.props.onUpdateBook} catName ='Currently Reading' bookBelonginTo={this.props.books.filter((bk) => (bk.shelf==='currentlyReading'))}  />
                 <Bookshelf onUpdateBook={this.props.onUpdateBook} catName ='Want ToRead' bookBelonginTo={this.props.books.filter((bk) => (bk.shelf==='wantToRead'))}  />
                 <Bookshelf onUpdateBook={this.props.onUpdateBook} catName ='Read'  bookBelonginTo={this.props.books.filter((bk) => (bk.shelf==='read'))} />
              
                 </div>
            </div>

            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>

         </div>

        )
    }
}
export default DisplayByCategory