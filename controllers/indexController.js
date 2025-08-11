const messages = [
  {
    text: "Alright mate",
    user: "Steve",
    added: new Date(),
  },
  {
    text: "How's it going sir",
    user: "John",
    added: new Date(),
  },
];

function getIndex(req, res) {
  res.render("index", { messages });
}

module.exports = { getIndex };
