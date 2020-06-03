import express, { request, response } from 'express';

const app = express();

app.get('/users', (request, response) => {
    response.json([
        'Filipe',
        'Saulo',
        'Edivaldo',
        'Cecilia'
    ]);
});

app.listen(3333);