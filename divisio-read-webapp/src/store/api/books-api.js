import axios from 'axios';

const loadBooks = () => axios.get('products').then(res => res.data.products);

const loadBook = (id) => axios.get(`books/${id}`).then(res => res.data.products);

const saveBook = (book) => axios.post('book', { book }).then(res => res.data);

export default {
  loadBooks,
  loadBook,
  saveBook
}