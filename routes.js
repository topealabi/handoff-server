var express = require("express");
var router = express.Router();

//we need some router.get(...) type functions
var messages_controller = require("./controllers/messagesController")

router.get("/", function(req, res, next) {
	res.send("Welcome to Handoff");
});

//message routes
router.get("/messages", messages_controller.all);
router.post("/messages/create", messages_controller.create);
router.post("/messages/update", messages_controller.update);
router.delete("/messages/delete", messages_controller.delete);
router.get("/messages/:id", messages_controller.read);

//error handling
router.use((req, res) => {
	res.status(400).json({
		title: "This route does not exist",
		description: `Could not find the url: '${req.originalUrl}' `
	});
});


router.use((error, req, res, next) => {
	res.status(500).json({
		title: "Something went wrong",
		description: error.message
	});
});

module.exports = router;