import { browserHistory } from 'react-router';
import Enums from "./Enums";
import { getUserToken } from './LocalStorageManager';

export const redirectToWelcomePage = () => browserHistory.push(`/${Enums.URI_WHITE_LIST.BOOKS}`);;

export const verifyAuthetication = (nextState, replace) => {
  if (getUserToken() === null) {
    replace('/');
  }
}