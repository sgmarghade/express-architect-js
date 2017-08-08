//This order models is exposing dummy functions. It can be any mongoose model or anything.
module.exports = function (options, imports) {
  return {
    toString: function () {
      console.log('This is toString function for Order');
      return 'Order Model';
    },

    createOrder: function () {
      console.log('Order is created');
      return 'order created';
    }
  }
}
