const { comments } = require("../data");


module.exports = {
    list: (req, res) => {
        return res.json(comments);
    },
    show: (req, res) => {
        return res.json(comments.find(comment => comment._id === parseInt(req.params.id)));
    },
    create: (req, res) => {
        const record = {
            ...req.body,
            _id: comments[comments.length - 1]._id + 1,
        };
        comments.push(record);
        return res.json(record);
    },
};