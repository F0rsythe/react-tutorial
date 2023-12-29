import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import ewuImage from "./images/ewu.png"
import "./index.css"

const App = () => {
  return (
    <React.Fragment>
      <section className='booklist'>
        {/* <h1>This is a booklist</h1> */}
        <Book />
      </section>
    </React.Fragment>
  )
}

const Book = () => {
  const title = "It ends with us"
  const author = "Collen Hoover"
  return (
    <article className='book'>
      <img src={ewuImage} alt="book-image" />
      <h1>{title}</h1>
      <h4>{author}</h4>
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
