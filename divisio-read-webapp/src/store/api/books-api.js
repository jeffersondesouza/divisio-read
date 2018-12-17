import axios from 'axios';
import { getUserToken } from '../../utils/LocalStorageManager';

const loadBooks = () => axios.get('products').then(res => res.data.products);

const loadBook = (id) => axios.get(`books/${id}`).then(res => res.data.products);

const saveBook = (book) => {
  const token = getUserToken().replace(/"/g, '')

  return axios.post('book',
    { book },
    { headers: { Authorization: `Bearer ${token}` } }
  )
    .then(res => res.data)
};

export default {
  loadBooks,
  loadBook,
  saveBook
}