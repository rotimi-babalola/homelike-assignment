import { isEmpty } from 'lodash';
/**
 * checks the values of an object to see if they are all true
 */
const atLeastOneKeyTrue = obj => {
  // eslint-disable-next-line no-restricted-syntax
  for (const val in obj) {
    if (obj[val] && !isEmpty(obj[val])) {
      return true;
    }
  }
  return false;
};

export default atLeastOneKeyTrue;
