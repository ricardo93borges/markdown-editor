'use strict'

import React from 'react'

const MarkdownEditor = ({value, handleChange}) => (
    <div className="App" onChange={ handleChange }>
        <textarea />
        <div className='view'>{ value }</div>
    </div>
)

export default MarkdownEditor