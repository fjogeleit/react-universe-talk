import React  from 'react';
import PropTypes from 'prop-types'
import { compose, setDisplayName, setPropTypes, withHandlers } from 'recompose'

const enhance = compose(
  // set the name of this component
  setDisplayName('TodoInput'),
  // define component prop-types
  setPropTypes({
    onEnter: PropTypes.func.isRequired
  }),
  // define custom handlers and map this functions to component props
  withHandlers({
    // name: (props) => (...arguments) => custom logic
    onKeyEnter: ({ onEnter }) => ({ key, target }) => {
      if (key === 'Enter' && target.value.length > 0) {
        onEnter(target.value)
        target.value = ''
      }
    }
  })
)

// get access to the event handler function as prop
export default enhance(({ onKeyEnter }) => (
  <div>
    <input required={true} onKeyPress={onKeyEnter}/>
  </div>
))