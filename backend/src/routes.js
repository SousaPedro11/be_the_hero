const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack',
        aluno: "Pedro Sousa"
    })
});

module.exports = routes