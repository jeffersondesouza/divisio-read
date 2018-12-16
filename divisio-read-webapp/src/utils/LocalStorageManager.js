
export const getUserToken = () => localStorage.getItem('userToken');

export const setUserToken = (userToken) => {
  localStorage.setItem('userToken', JSON.stringify(userToken))
};

export const removeUserToken = () => {
  if (typeof localStorage['userToken'] !== 'undefined') {
    localStorage.removeItem('userToken');
  }
}

