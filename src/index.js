import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { books} from './books'
import Book from "./Book"
import "./index.css"


const App = () => {
  return (
    <React.Fragment>
      <section className='booklist'>
        {/* <h1>This is a booklist</h1> */}
        {books.map((book)=>{
          // The line below is not important becuase the property has already been destructured in the book component
          const {img, author, title} = book
          return(
            <Book {...book} key={book.id} />
          );
        })}
      </section>
    </React.Fragment>
  )
}

// const Book = (props) => {

//   return (
//     <article className='book'>
//       <img src = {props.img} alt="book-image" />
//       <h1>{props.title}</h1>
//       <h4>{props.author}</h4>
//     </article>
//   )
// }

//Alternative
// ReactDOM.render(<App />, document.getElementById('root'))

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <StrictMode>
  <App/>
  </StrictMode>
)


// 17th

// I might have to miss CDS if it's on wednesday

// If the meeting is on 