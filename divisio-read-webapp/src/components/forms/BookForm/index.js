import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles/book-form.scss';

import Input from '../../ui/Input';
import SelectBookStatus from '../../ui/SelectBookStatus';
import IcoMoon from 'react-icomoon';

class BookForm extends Component {

  constructor() {
    super();
    this.state = {
      title: '',
      pages: 0,
      author: '',
      status: ''
    }
  }

  handleSaveBook = (event) => {
    event.preventDefault();
    this.props.onSaveBook(this.state);
  }

  render() {
    const bookFormClasses = (this.props.showBookCreationForm)
    ? 'book-form'
    : 'book-form book-form--hidden';
    console.log('bookFormClasses', bookFormClasses);

    return (
      <div className={bookFormClasses}>
        <div className="book-form__wrapper">
          <div className="book-form__close-wrapper">
            <button onClick={this.props.onHideForm} type="button" className="book-form__close-btn">
              <IcoMoon icon="cross" />
            </button>
          </div>
          <form className="book-form__form" onSubmit={this.handleSaveBook}>
            <div className="form-group">
              <Input label="Título" onChange={title => this.setState({ title })} />
            </div>
            <div className="form-group">
              <Input label="Autor" onChange={author => this.setState({ author })} />
            </div>
            <div className="form-group">
              <Input label="Páginas" onChange={pages => this.setState({ pages })} />
            </div>
            <div className="form-group">
              <SelectBookStatus value='fechado' onChange={status => this.setState({ status })} />
            </div>
            <div className="form-actions">
              <button className="btn">Salvar</button>
            </div>
          </form>
        </div>
      </div>

    );
  }


}


BookForm.propTypes = {
  onLoggin: PropTypes.func
}


export default BookForm;