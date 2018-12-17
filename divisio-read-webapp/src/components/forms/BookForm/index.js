import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../../ui/Input';
import SelectBookStatus from '../../ui/SelectBookStatus';

class BookForm extends Component {

  constructor() {
    super();
    this.state = {
      title: '',
      pages: null,
      author: '',
      status:'fechado'
    }
  }

  handleSaveBook = (event) => {
    event.preventDefault();
    this.props.onSaveBook(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSaveBook}>
    
        <div className="form-group">
          <Input label="Título" onChange={title => this.setState({ title })} />
        </div>
        <div className="form-group">
          <Input label="Autor" onChange={author => this.setState({ author })} />
        </div>
        <div className="form-group">
          <Input type="number" label="Páginas" onChange={pages => this.setState({ pages })} />
        </div>
        <div className="form-group">
          <SelectBookStatus value={this.state.status} onChange={status => this.setState({ status })}/>
        </div>

        <div className="form-actions">
          <button>Login</button>
        </div>
      </form>
    );
  }


}


BookForm.propTypes = {
  onLoggin: PropTypes.func
}


export default BookForm;