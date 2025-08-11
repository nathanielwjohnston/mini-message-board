const { Router } = require("express");
const { getIndex, getMessageById } = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", getIndex);
indexRouter.get("/message/:messageId", getMessageById);

module.exports = indexRouter;
