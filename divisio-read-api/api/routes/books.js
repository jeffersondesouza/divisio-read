const router = require('../utils/buildRouter');
const checkAuth = require('../midleware/check-auth');

const BookController = require('./../controllers/books');

// router.get("/", checkAuth, BookController.getAll);

/* router.get('/:bookId', checkAuth, BookController.getById);
 */
// router.post("/", BookController.save);

// router.delete("/:bookId", checkAuth, BookController.deleteOrder);


router.get("/", BookController.getAll);
router.post("/", BookController.save);


module.exports = router;