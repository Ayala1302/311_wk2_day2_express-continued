const { contacts } = require("../data");

module.exports = {
  list: (req, res) => {
    return res.json(contacts);
  },
  show: (req, res) => {
    return res.json(
      contacts.find((contact) => contact._id === parseInt(req.params.id))
    );
  },
  create: (req, res) => {
    const record = {
      ...req.body,
      _id: contacts[contacts.length - 1]._id + 1,
    };
    contacts.push(record);
    return res.json(record);
  },
};
