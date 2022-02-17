import React from 'react'

const Tags = ({ tags }) => {
  return (
    <ul className="tags">
      {tags.map((el, index) => (
        <li key={index}>{el}</li>
      ))}
    </ul>
  )
}

export default Tags
