const sql = require('mssql');

function bookController(bookService, nav) {

  function getIndex(req, res) {
    (async function query() {

      const request = new sql.Request();
      // la instrucción con las {} permite decirle que me devuelva esa variable
      // esto va a devolver la variable result.recordset
      const { recordset } = await request.query('select * from books');

      res.render(
        'bookListView',
        {
          nav,
          title: 'Library',
          books: recordset
        }
      );
    }());
  }

  function getById(req, res) {
    (async function query() {

      const { id } = req.params;
      const request = new sql.Request();
      const { recordset } =
        await request
          .input('id', sql.Int, id)
          .query('select * from books where id = @id');
      req.book = recordset[0]
      
      req.book.details = await bookService.getBookByID(req.book.id);
      
      res.render(
        'bookView',
        {
          nav,
          title: 'Library',
          book: req.book
        });
    }());

  }

  function middleware(req, res, next) {
    if (req.user) {
      next();
    } else {
      res.redirect('/');
    }
  }


  return {
    getIndex,
    getById,
    middleware
  };

}

module.exports = bookController;