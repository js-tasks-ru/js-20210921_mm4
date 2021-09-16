/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc' ) {
  if (param === 'asc') {
    if (arr.toLocaleString() === 'en') {
      return arr.sort();
    } else if (arr.toLocaleString() === 'ru') {
      return arr.sort();
    }
  } else if (param === 'desc') {
    if (arr.toLocaleString() === 'en') {
      return arr.reverse();
    } else if (arr.toLocaleString() === 'ru') {
      return arr.reverse();
    }
  }
}
