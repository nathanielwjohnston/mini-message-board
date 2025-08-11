const db = require("../db");

function getNewMessageForm(req, res) {
  res.render("form");
}

async function sendMessage(req, res) {
  const message = {
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
  };

  await db.addMessage(message);
  res.redirect("/");
}

module.exports = { getNewMessageForm, sendMessage };
