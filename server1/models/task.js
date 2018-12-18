const mongoose = require('mongoose');
// Define user schema
var Schema = mongoose.Schema;

module.exports = mongoose.model('Task', {
  name: String,
  description: String,
  lastDate: String,
  status: String
});
