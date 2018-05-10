const express = require('express');

const boolController = require ('../controllers/bookController');

const bookRouter = express.Router();

const sql = require('mssql');

// implementando un servicio
const bookService = require('../services/testService');

function router(nav) {
    const { getIndex, getById, middleware } = boolController(bookService, nav);
    
    bookRouter.use(middleware);

    bookRouter.route('/')
        .get(getIndex);

    bookRouter.route('/:id')
        .get(getById);

    return bookRouter;

}

module.exports = router;