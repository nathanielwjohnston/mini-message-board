const messages = [
  {
    id: 0,
    text: "Alright mate",
    user: "Steve",
    added: new Date(),
  },
  {
    id: 1,
    text: "How's it going sir",
    user: "John",
    added: new Date(),
  },
];

let currentId = 1;

async function getMessages() {
  return messages;
}

async function addMessage(newMessage) {
  currentId++;
  messages.push({ id: currentId, ...newMessage });
}

async function getMessageById(messageId) {
  return messages.filter((message) => message.id == messageId)[0];
}

module.exports = { getMessages, addMessage, getMessageById };
