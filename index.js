const express = require("express");
const app = express();
const port = process.env.PORT || 4001;

const { contacts, comments, products, vehicles } = require("./data");
const routes = require("./routes");

app.use(express.json());
app.use(express.static("public"));
app.use(routes);


app.get("/comments", (req, res) => {
  return res.json(comments);
});

app.get("/comments/:id", (req, res) => {
  console.log(req.params.id);
  return res.json(
    comments.find((comment) => comment._id === parseInt(req.params.id))
  );
});

app.post("/comments", (req, res) => {
  const record = {
    ...req.body,
    _id: comments[comments.length - 1]._id + 1,
  };

  comments.push(record);

  return res.json(record);
});

app.get("/products", (req, res) => {
  return res.json(products);
});

app.get("/products/:id", (req, res) => {
  console.log(req.params.id);
  return res.json(
    products.find((product) => product._id === parseInt(req.params.id))
  );
});

app.post("/products", (req, res) => {
  const record = {
    ...req.body,
    _id: products[products.length - 1]._id + 1,
  };

  products.push(record);

  return res.json(record);
});

app.get("/vehicles", (req, res) => {
  return res.json(vehicles);
});

app.get("/vehicles/:id", (req, res) => {
  console.log(req.params.id);
  return res.json(
    vehicles.find((vehicle) => vehicle._id === parseInt(req.params.id))
  );
});

app.post("/vehicles", (req, res) => {
  const record = {
    ...req.body,
    _id: vehicles[vehicles.length - 1]._id + 1,
  };

  vehicles.push(record);

  return res.json(record);
});



app.get("/contacts/:id", (req, res) => {
  console.log(req.params.id);
  return res.json(
    contacts.find((contact) => contact._id === parseInt(req.params.id))
  );
});

app.post("/contacts", (req, res) => {
  const record = {
    ...req.body,
    _id: contacts[contacts.length - 1]._id + 1,
  };

  contacts.push(record);

  return res.json(record);
});

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
