import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../../ui/Input';
import SelectBookStatus from '../../ui/SelectBookStatus';

class BookForm extends Component {

  constructor() {
    super();
    this.titulo = 'ola';
    this.state = {
      titulo: '',
      paginas: null,
      autor: '',
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
      {
        this.state.status
      }
        <div className="form-group">
          <Input label="Título" onChange={titulo => this.setState({ titulo })} />
        </div>
        <div className="form-group">
          <Input label="Autor" onChange={autor => this.setState({ autor })} />
        </div>
        <div className="form-group">
          <Input type="number" label="Páginas" onChange={paginas => this.setState({ paginas })} />
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