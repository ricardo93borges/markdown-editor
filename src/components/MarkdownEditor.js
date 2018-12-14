import React from 'react'
import PropTypes from 'prop-types';

const MarkdownEditor = ({value, handleChange, saving, getMarkup}) => (
    <div className="App">
        <p>{ saving ? 'Salvando ...' : 'Salvo!'}</p>
        <textarea autoFocus onChange={ handleChange } value={value} />
        <div className='view' dangerouslySetInnerHTML={getMarkup( )} />
    </div>
)

MarkdownEditor.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    saving: PropTypes.bool.isRequired,
    getMarkup: PropTypes.func.isRequired,
}

export default MarkdownEditor