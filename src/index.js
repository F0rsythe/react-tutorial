import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./index.css"


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