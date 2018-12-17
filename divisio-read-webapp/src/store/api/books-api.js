import axios from 'axios';
import { getUserTokenFromHeader } from '../../utils/LocalStorageManager';

const loadBooks = () => axios
  .get('books',
    { headers: { Authorization: `Bearer ${getUserTokenFromHeader()}` } }
  )
  .then(res => res.data.books);

const loadBook = (id) => axios
  .get(`books/${id}`,
    { headers: { Authorization: `Bearer ${getUserTokenFromHeader()}` } }
  )
  .then(res => res.data.book);

const saveBook = (book) => axios.post('books', { ...book },
  { headers: { Authorization: `Bearer ${getUserTokenFromHeader()}` } }
)
  .then(res => res)
  .catch(err => console.log(err));


const updateBook = (book) => axios.patch(`books/${book._id}`, { ...book },
  { headers: { Authorization: `Bearer ${getUserTokenFromHeader()}` } }
)
  .then(res => {
    console.log('res', res);
    return res;
  })
  .catch(err => console.log(err));


export default {
  loadBooks,
  loadBook,
  saveBook, 
  updateBook
}