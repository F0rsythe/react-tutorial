import React from 'react'
import Book from './Book'
import { books } from './books'

const App = () => {
  return (
    <React.Fragment>
      <section className='booklist'>
        {/* <h1>This is a booklist</h1> */}
        {books.map((book) => {
          // The line below is not important becuase the property has already been destructured in the book component
          const { img, author, title } = book
          return <Book {...book} key={book.id} />
        })}
      </section>
    </React.Fragment>
  )
}

export default App