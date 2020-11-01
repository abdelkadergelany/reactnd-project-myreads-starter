import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

 class DisplayByCategory extends Component {
    render() {
        const { books, onUpdateBook } = this.props
        return (
      
         <div className="list-books">
            <div className="list-books-title">
               <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
               <div>
                 <Bookshelf catName ='Currently Reading' bookBelonginTo={(books)=>(books.map((b)=>b.shelf==='Currently Reading'))} />
                 <Bookshelf catName ='Want to Read' bookBelonginTo={(books)=>(books.map((b)=>b.shelf==='Want to Read'))} />
                 <Bookshelf catName ='Read' bookBelonginTo={(books)=>(books.map((b)=>b.shelf==='Read'))} />
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