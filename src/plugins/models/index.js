module.exports = function (options, imports, register) {
  try{
    register(null, {
      'Order': require('./src/Order')(options, imports),
      'User': require('./src/User')(options, imports)
    });
  }catch(err) {
    register(err);
  }
}
