import axios from 'axios';

const login = ({ email, password }) => axios.post('login', { email, password })

const signup = ({ email, password, confirmPassword }) => axios.post('signup', { email, password, confirmPassword, name: confirmPassword })

export default {
  login,
  signup
}