const mongoose = require("mongoose");
const schema = mongoose.schema;

const userSchema = new Schema({});

const User = mongoose.model(userCollectionName, userSchema);

module.exports = User;
