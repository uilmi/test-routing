const express = require('express');
const app = express();

const port = 3000;

function helloWorld(req, res) {
    res.send('Hello World');
}

function getProducts(req, res) {
    const data = ['Apple', 'Redmi', 'One plus'];

    res.json(data);
}

function getOrders(req, res) {
    const data = {
        id: 1,
        paid: false,
        user_id: 1
    }

    res.json(data);
}

app.get('/', helloWorld);

app.get('/products', getProducts);

app.get('/orders', getOrders);

app.get('/users', function (req, res) {
    const dataUser = [{ nama: 'abc', umur: 10 }, { nama: 'cde', umur: 15 }];

    res.send(dataUser);
})

app.listen(port);