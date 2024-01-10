import React from 'react'
import { click } from './events'
import { complexBtn } from './events'

const Book = (props) => {
  const { img, title, author } = props
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
        <button
          type='button'
          onMouseOver={() => {
            console.log('It finally works')
          }}
        >
          HOVER
        </button>
      </article>
    </div>
  )
}

// Default exports
export default Book