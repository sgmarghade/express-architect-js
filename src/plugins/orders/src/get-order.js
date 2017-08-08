module.exports = function (options, imports) {
  return (req, res) => {
    console.log('Accessing User model', imports.User.toString());
    res.send({message: imports.User.getUserOrder()});
  }
}
