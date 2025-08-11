const { Router } = require("express");
const { getNewMessageForm } = require("../controllers/newMessageController");

const newMessageRouter = Router();

newMessageRouter.get("/", getNewMessageForm);

module.exports = newMessageRouter;
