import React, { Component } from 'react'

export default class BookShelfChanger extends Component {
    render() {
        return (
            <div className="book-shelf-changer">
            <select 
            defaultValue={'none'}
            onChange={(event) => this.props.onUpdateBook(this.props.book,event.target.value)} 
            >
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option  value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        )
    }
}
