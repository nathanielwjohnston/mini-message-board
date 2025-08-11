const { Router } = require("express");
const {
  getNewMessageForm,
  sendMessage,
} = require("../controllers/newMessageController");

const newMessageRouter = Router();

newMessageRouter.get("/", getNewMessageForm);
newMessageRouter.post("/", sendMessage);

module.exports = newMessageRouter;
