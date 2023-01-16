const { products } = require("../data");


module.exports = {
    list: (req, res) => {
        return res.json(products);
    },
    show: (req, res) => {
        return res.json(products.find(product => product._id === parseInt(req.params.id)));
    },
    create: (req, res) => {
        const record = {
            ...req.body,
            _id: products[products.length - 1]._id + 1,
        };
        products.push(record);
        return res.json(record);
    },
};