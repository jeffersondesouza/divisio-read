const router = require('../utils/buildRouter');
const checkAuth = require('../midleware/check-auth');

const BookController = require('./../controllers/books');

// router.get("/", checkAuth, BookController.getAll);

/* router.get('/:bookId', checkAuth, BookController.getById);
 */
// router.post("/", BookController.save);

// router.delete("/:bookId", checkAuth, BookController.deleteOrder);

router.post("/", BookController.save);

router.get("/", BookController.getAll);

router.get("/:id", BookController.getById);

router.patch("/:id", BookController.update);

router.delete("/:id", BookController.delete);



module.exports = router;