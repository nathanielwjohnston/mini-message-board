const db = require("../db");

async function getIndex(req, res) {
  const messages = await db.getMessages();

  res.render("index", { messages });
}

module.exports = { getIndex };
