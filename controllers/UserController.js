'use strict';

let path = require('path');

function create(req, res) {
    let params = req.body;
    res.status(200).send({
        message: 'create'
    });
}

function update(req, res) {
    let params = req.body;
    res.status(200).send({
        message: 'update'
    });
}

function findByAll(req, res) {
    let params = req.body;
    res.status(200).send({
        message: 'findByAll'
    });
}

function findById(req, res) {
    let params = req.body;
    res.status(200).send({
        message: 'findById'
    });
}

module.exports = {
    create,
    update,
    findByAll,
    findById
};