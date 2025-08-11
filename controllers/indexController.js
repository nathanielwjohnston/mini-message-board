const db = require("../db");

async function getIndex(req, res) {
  const messages = await db.getMessages();

  res.render("index", { messages });
}

async function getMessageById(req, res) {
  const { messageId } = req.params;

  const message = await db.getMessageById(messageId);

  res.render("message", { message });
}

module.exports = { getIndex, getMessageById };
