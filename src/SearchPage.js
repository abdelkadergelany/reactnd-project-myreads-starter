import React, { Component } from 'react'

 class SearchPage extends Component {

    state = {
        query: ''
      }
    
      updateQuery = (query) => {
        this.setState(() => ({
          query: query.trim()
        }))
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
              c.name.toLowerCase().includes(query.toLowerCase())
            ))

        return (
            
        <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"
                value={query}
                onChange={(event) => this.updateQuery(event.target.value)}                
                />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              { showingBooks.map((book)=>(

                <li>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
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
                  <div className="book-title">To Kill a Mockingbird</div>
                  <div className="book-authors">Harper Lee</div>
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