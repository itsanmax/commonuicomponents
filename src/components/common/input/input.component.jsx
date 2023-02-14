import React from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

/**
 * Component for showing input box
 *
 * @component
 * @example
 * const label = 'Title';
 * const name = 'Title';
 * const helperText = 'Title here';
 * const handleChange = (e) => {
 *  console.log(e);
 * }
 * return (
 *   <Input label="Title" name="Title" 
            onBlur={handleChange}
            onKeyUp={handleChange}
            onChange={handleChange}
            helperText="Test"  />
 * )
 */
const Input = ({ ...props }) => (
  <div>
    <TextField
      InputLabelProps={{ shrink: true }}
      style={{ width: '100%' }}
      {...props}
    />
  </div>
);

Input.propTypes = {
  /**
   * Input's label
   */
  label: PropTypes.string,
  /**
   * Input's name
   */
  name: PropTypes.string,
  /**
   * Input's onBlur handler
   */
  onBlur: PropTypes.func,
  /**
   * Input's onKeyUp handler
   */
  
  onKeyUp: PropTypes.func,
  /**
   * Input's onChange handler
   */
  
  onChange: PropTypes.func,
  /**
   * Input's helperText
   */
   helperText: PropTypes.string
}

/**
 * sample handle change function
 */
const handleChange = (e) => {
  console.log(e);
}

/**
 * Define default props
 */
Input.defaultProps = {
  label: 'Title',
  name: 'Title',
  onBlur: {handleChange},
  onKeyUp: {handleChange},
  onChange: {handleChange},
  helperText: 'Input title'
};

export default Input;

