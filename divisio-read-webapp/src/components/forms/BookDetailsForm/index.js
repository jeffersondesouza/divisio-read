import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../../ui/Input';
import SelectBookStatus from '../../ui/SelectBookStatus';

class BookDetailsForm extends Component {

  constructor() {
    super();
    this.state = {
      title: 'ola',
      pages: 199,
      author: 'joao',
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
          <Input value={this.props.editingBook.title || ''} label="Título" onChange={title => this.setState({ title })} />
        </div>
        <div className="form-group">
          <Input value={this.props.editingBook.author || ''} label="Autor" onChange={author => this.setState({ author })} />
        </div>
        <div className="form-group">
          <Input type="text" value={this.props.editingBook.pages || 0} label="Páginas" onChange={pages => this.setState({ pages })} />
        </div>
        <div className="form-group">
          <SelectBookStatus value={this.props.editingBook.status || 'fechado'} onChange={status => this.setState({ status })}/>
        </div>

        <div className="form-actions">
          <button>Login</button>
        </div>
      </form>
    );
  }


}


BookDetailsForm.propTypes = {
  onLoggin: PropTypes.func
}


export default BookDetailsForm;