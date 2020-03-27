const express = require('express')

const port = 3333;

const app = express();

app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack',
        aluno: "Pedro Sousa"
    })
});

app.listen(port);
