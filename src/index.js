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
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </section>
    </React.Fragment>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => {
  return (
    <img
      src={ewuImage}
      alt='it ends with us book cover'
    />
  )
}

const Title = () =>{
  return(
    <h1>It ends with us</h1>
  )
}

const Author = () =>{
  return(
    <h4>Collen Hoover</h4>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
//Alternative
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <StrictMode>
//     <App/>
//   </StrictMode>
// )
