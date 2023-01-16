const { vehicles } = require("../data");


module.exports = {
    list: (req, res) => {
        return res.json(vehicles);
    },
    show: (req, res) => {
        return res.json(vehicles.find(vehicle => vehicle._id === parseInt(req.params.id)));
    },
    create: (req, res) => {
        const record = {
            ...req.body,
            _id: vehicles[vehicles.length - 1]._id + 1,
        };
        vehicles.push(record);
        return res.json(record);
    },
};