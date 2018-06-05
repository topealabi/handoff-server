var Message = require("../models/message.js")
// var mmUtils = require("../meta-mask-utils.js")

exports.all = function(req, res){
	Message.find({}, (err, messages) => {
		console.log("All messages");
		res.send(messages);
	})
}


// Display details for a specific message
exports.create = function(req, res) {
  console.log(req.body);
  
  res.send("encrypted")
  
};

// Handle message create on POST.
exports.read = function(req, res) {
  message.findOne({ address: req.params.address }, (err, message) => {
    if (err) {
      console.log(err);
    }
    if (message) {
      console.log("found message in ");
      res.send(message);
    } else {
      console.log("did not find message in db");
      res.send("did not find message in db");
    }
  });
};

// Handle message delete on POST.
exports.update = function(req, res) {
  // res.send("NOT IMPLEMENTED: message UPDATE");

  message.findOneAndUpdate(
    { address: req.body.address },
    {
      $set: {
        symbol: req.body.symbol,
        balance_in_eth: req.body.balance_in_eth,
        percentage_of_all_eth: req.body.percentage_of_all_eth,
        transaction_count: req.body.transaction_count
      }
    },
    { new: true },
    (err, newToken) => {
      if (err) {
        res.send("Something wrong when updating data!");
      }

      res.send(newToken);
    }
  );
};

// Handle Token update on POST.
exports.delete = function(req, res) {
  // res.send("NOT IMPLEMENTED: Contract DELETE");

  message.findOneAndRemove({ address: req.body.address }, (err, message) => {
    if (err) {
      res.send("Something wrong when removing data!");
    }
    if (message) {
      res.send("message found and removed");
    } else {
      res.send("No user found");
    }
  });
};
