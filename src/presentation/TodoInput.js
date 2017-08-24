import React  from 'react';
import PropTypes from 'prop-types'

const onKeyEnter = (onEnter) => ({ key, target }) => {
  if (key === 'Enter' && target.value.length > 0) {
    onEnter(target.value)
    target.value = ''
  }
}

const TodoInput = ({ onEnter }) => (
  <div>
    <input required={true} onKeyPress={onKeyEnter(onEnter)}/>
  </div>
)

TodoInput.propTypes = {
  onEnter: PropTypes.func.isRequired
}

export default TodoInput