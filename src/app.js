"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.post('/api/1.0/users', (req, res) => {
    return res.send({ message: 'User created' });
});
module.exports = app;
