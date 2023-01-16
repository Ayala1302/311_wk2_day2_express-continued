const express = require('express');
const router = express.Router();
const contactsRoute = require('./contacts');
const commentsRoute = require('./comments');
const productsRoute = require('./products');
const vehiclesRoute = require('./vehicles');

router.get("/contacts", contactsRoute);
router.get("/contacts/:id", contactsRoute);
router.post("/contacts", contactsRoute);

router.get("/comments", commentsRoute);
router.get("/comments/:id", commentsRoute);
router.post("/comments", commentsRoute);

router.get("/products", productsRoute);
router.get("/products/:id", productsRoute);
router.post("/products", productsRoute);

router.get("/vehicles", vehiclesRoute);
router.get("/vehicles/:id", vehiclesRoute);
router.post("/vehicles", vehiclesRoute);

module.exports = router;