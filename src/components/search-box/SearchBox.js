import React from 'react'
import './seach-box.css'

const SearchBox = ({placeholder, handleChange}) => {
  return (
    <div>
        <input type="search" className='search' placeholder={placeholder} onChange = {handleChange} />
    </div>
  )
}

export default SearchBox