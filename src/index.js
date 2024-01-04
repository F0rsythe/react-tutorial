import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import ewuImage from "./images/ewu.png"
import rohbookCover from "./images/reminders-of-him 1.jpg"
import "./index.css"

const firstbook = {
  img: ewuImage,
  title: "It ends with us",
  author: "Colleen Hoover"
}
const secondbook = {
  img: rohbookCover,
  title: 'Reminders of Him',
  author: 'Colleen Hoover',
}
const App = () => {
  return (
    <React.Fragment>
      <section className='booklist'>
        {/* <h1>This is a booklist</h1> */}
        <Book img={firstbook.img} title={firstbook.title} author={firstbook.author} />
        <Book img={secondbook.img} title={secondbook.title} author={secondbook.author} />
      </section>
    </React.Fragment>
  )
}

const Book = (props) => {

  return (
    <article className='book'>
      <img src = {props.img} alt="book-image" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
//Alternative
// const root = ReactDOM.createRoot(document.getElementById('root'))c:\Users\Demilade\Videos\darwin's game\Darwin's Game - 11 [720p x265].mkv c:\Users\Demilade\Videos\darwin's game\Darwin's Game - 09 [720p x265].mkv c:\Users\Demilade\Videos\darwin's game\Darwin's Game - 10 [720p x265].mkv
// root.render(
//   <StrictMode>
//     <App/>
//   </StrictMode>
// )
