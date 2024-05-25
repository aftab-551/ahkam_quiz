const express = require('express');
const cors = require('cors');
const questionRouter = require('./router/auth-router');
const credentialsRouter = require('./router/credentials.router');
const app = express();
app.use(cors({
    origin:"http://localhost:3000",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials:true
}));
app.use(express.json());
app.use(questionRouter);
app.use(credentialsRouter);

module.exports = app ;