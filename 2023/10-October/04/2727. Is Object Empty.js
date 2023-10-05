/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    console.log(Object.entries(obj).length);
    return Object.entries(obj).length === 0;
};