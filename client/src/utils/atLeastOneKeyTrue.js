import { isEmpty } from 'lodash';
/**
 * checks the values of an object to see if they are all true
 */
const atLeastOneKeyTrue = obj => {
  // eslint-disable-next-line guard-for-in
  for (const val in obj) {
    if (typeof obj[val] === 'number' && obj[val]) {
      return true;
    }
    if (obj[val] && !isEmpty(obj[val])) {
      return true;
    }
  }
  return false;
};

export default atLeastOneKeyTrue;
