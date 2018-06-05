// holder.js

var mongoose = require("../db/connector");
var Schema = mongoose.Schema;

var messageSchema = mongoose.Schema({
	// _id: Schema.Types.ObjectId,
	sender: String,
	reciver: String,
	data: String
});

var Message = mongoose.model("Message", messageSchema);

module.exports = Message;