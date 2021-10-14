/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  const res = {};

  if (obj) {
    Object.keys(obj).forEach((value) => {
      let key = obj[value];
      res[key] = value;
    });
  } else {
    return undefined;
  }
  return res;
}
