module.exports = function (options, imports) {
  return (req, res) => {
    console.log('Accessing Order model', imports.Order.toString());
    res.send({message: imports.Order.createOrder()});
  }
}
