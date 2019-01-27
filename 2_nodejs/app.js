const express = require('express');
const app = express();
const path = require('path');

var favicon = require('serve-favicon');
app.use(favicon(path.join(__dirname,  'skynet', 'favicon.ico')));

const port = 8000;

const rootRoute = '/';
const t800Route = '/t-800';
const t1000Route = '/t-1000';

app.get(rootRoute, function(req, res) {
    res.sendFile(path.join(__dirname, 'skynet', '/index.html'));
});

app.get(t800Route, function(req, res) {
    res.sendFile(path.join(__dirname, 't-800', '/index.html'));
});

app.get(t1000Route, function(req, res) {
    res.sendFile(path.join(__dirname, 't-1000', '/index.html'));
});

app.listen(port);

console.log(`Hosting at http://localhost:${port}`);
