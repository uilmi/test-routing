const express = require('express');
const app = express();

const port = 3000;

function helloWorld(req, res) {
    res.send('Hello World');
}

function getProducts(req, res) {
    const data = ['Apple', 'Redmi', 'One plus'];

    res.send(data);
}

function getOrders(req, res) {
    const data = { id: 1, paid: false, user_id: 1 };

    res.send(data);
}

app.get('/', helloWorld);

app.get('/products', getProducts);

app.get('/orders', getOrders);