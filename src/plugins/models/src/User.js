//This order models is exposing dummy functions. It can be any mongoose model or anything.
module.exports = function (options, imports) {
  return {
    toString: function () {
      console.log('This is toString function for User');
      return 'User Model';
    },

    getUserOrder: function () {
      console.log('Getting user order');
      return 'User orders are 1, 2';
    }
  }
}
