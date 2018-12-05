'use strict'

import React from 'react'

const MarkdownEditor = ({value, handleChange, getMarkup}) => (
    <div className="App">
        <textarea autoFocus onChange={ handleChange } value={value} />
        <div className='view' dangerouslySetInnerHTML={getMarkup( )} />
    </div>
)

export default MarkdownEditor