import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import ewuImage from "./images/ewu.png"
import rohbookCover from "./images/reminders-of-him 1.jpg"
import "./index.css"

const books = [
{
  id: 1,
  img: ewuImage,
  title: "It ends with us",
  author: "Colleen Hoover"
},
{
  id:2,
  img: rohbookCover,
  title: 'Reminders of Him',
  author: 'Colleen Hoover',
}
];
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
const click = (e) =>{
  console.log(e.target)
  console.log(e)
alert("Hello World")
}
const complexBtn = (author) =>{
  alert(`This is the author: ${author}`)
}

const Book = (props) =>{
  const {img, title, author} = props
  const mouseOver = (title) => {
  console.log(title)
  }
  return (
    <div
      onMouseOver={() => {
        console.log('HOVERRR')
      }}
    >
      <article className='book'>
        <img src={img} alt='this is the picture of a book' />
        <h1>{title}</h1>
        <h4>{author}</h4>
        <button type='button' onClick={click}>
          CLICK ME
        </button>
        <button
          type='button'
          onClick={() => {
            complexBtn(author)
          }}
        >
          COMPLEX
        </button>
        <button type='button' onMouseOver={()=>{console.log("It finally works")}}>HOVER</button>
      </article>
    </div>
  )
}
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