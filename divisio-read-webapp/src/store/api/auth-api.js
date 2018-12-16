import axios from 'axios';

const login = ({ email, password }) => axios.post('login/email-and-password', { email, password })

const signup = ({ email, password, confirmPassword }) => axios.post('signup/email-and-password', { email, password, confirmPassword, name: confirmPassword })

export default {
  login,
  signup
}