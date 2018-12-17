import history from './history';

import { browserHistory } from 'react-router';
import { getUserToken } from './LocalStorageManager';

export const redirectToWelcomePage = () => {
  // browserHistory.push(`/books`);
  history.push(`/books`);

};

export const redirectTo = (url = '/') => {
  // browserHistory.push(url);
  history.push(url);
};

export const verifyAuthetication = (nextState, replace) => {

  const currentToken = getUserToken();

  /* TODO - Generate a more sofisticated async token check to verifay the token state at server   */
  if (currentToken === null) {
    return replace('/');
  }



}