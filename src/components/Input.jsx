import React from 'react';
import Form from 'react-bootstrap/Form';

class Input extends React.Component {

  render() {
    const { name, value, onChange, labelName } = this.props;
    return (
      <div className='form__search'>
        <label htmlFor={name} className="text-label">Found {labelName}</label>
        <Form.Control
          type="text"
          value={value.search} 
          name='search' 
          id={name} 
          onChange={onChange}
          className="input"
        />
      </div>
    )
  }
}

export default Input;
