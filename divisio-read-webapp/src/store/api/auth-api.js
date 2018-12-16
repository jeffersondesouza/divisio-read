import axios from 'axios';

const login = ({ email, password }) => axios
  .post('user/login', { email, password })
  .then(res=>res.data);

const signup = ({ email, password, confirmPassword }) => axios.post('signup', { email, password, confirmPassword, name: confirmPassword })

export default {
  login,
  signup
}