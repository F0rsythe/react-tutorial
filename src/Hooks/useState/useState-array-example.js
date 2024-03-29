import React from 'react'
import { useState } from 'react'
import { data } from '../../data'

const ArrayExample = () => {
  const [people, setPeople] = useState(data)
  return (
    <React.Fragment>
      {people.map((person) => {
        const { id, name } = person
        return <div key={id} className='item'>
            <h4>
                {name}
            </h4>
        </div>
      })}
    </React.Fragment>
  )
}

export default ArrayExample
