import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';

class DropdawnList extends React.Component {
  render() {
    const { show, value, onChange } = this.props;

    return (
      show && <div className="dropdawn">
        <div className="dropdawn__content">
          <label htmlFor='select' className="text-label">Order by</label>
          <Form.Select value={value.select} onChange={onChange} id='select' name='select' className="input">
            <option value="name" >A - Z</option>
            <option value="-name">Z - A </option>
            <option value="modified">modified </option>
            <option value="-modified">-modified </option>
          </Form.Select>
        </div>
        <div className="dropdawn__content">
          <label htmlFor='pages' className="text-label">Number of articles downloaded (from 1 to 100)</label>
          <Form.Control
            type="number"
            min="1"
            max="100"
            id='pages'
            value={value.number}
            name='number'
            onChange={onChange}
            className="input"
          />
        </div>
      </div>
    )
  }
}
class DropdawnListComics extends React.Component {
  render() {
    const { show, value, onChange } = this.props;

    return (
      show && <div className="dropdawn">
        <div className="dropdawn__content">
          <label htmlFor='select' className="text-label">Order by</label>
          <Form.Select value={value.select} onChange={onChange} id='select' name='select' className="input">
            <option value="	focDate">focDate</option>
            <option value="title" >A - Z</option>
            <option value="-title">Z - A </option>
            <option value="onsaleDate">onsaleDate</option>
            <option value="-modified">-modified </option>
            <option value="issueNumber">issueNumber</option>
            <option value="modified">modified</option>
            <option value="-focDate">-focDate</option>
            <option value="-onsaleDate">-onsaleDate</option>
            <option value="-issueNumber">-issueNumber</option>
          </Form.Select>
          <label htmlFor='format' className="text-label" >Format </label>
          <Form.Select value={value.format} onChange={onChange} id='format' name='format' className="input">
            <option value="comic">comic</option>
            <option value="collection">collection</option>
          </Form.Select>
        </div>
        <div className="dropdawn__content">
          <label htmlFor='pages' className="text-label">Number of articles downloaded (from 1 to 100)</label>
          <Form.Control
            type="number"
            min="1"
            max="100"
            id='pages'
            value={value.number}
            name='number'
            onChange={onChange}
            className="input"
          />
        </div>
      </div>
    )
  }
}


class Dropdown extends React.Component {

  render() {
    const { onClick } = this.props;
    return (
      <Button type='button' className='button button--filter' onClick={onClick}><i className="fa-solid fa-bars"></i>Filters</Button>
    )
  }
}

export { Dropdown, DropdawnList, DropdawnListComics };
