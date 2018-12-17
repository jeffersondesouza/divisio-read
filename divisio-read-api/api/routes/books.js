const router = require('../utils/buildRouter');

const BookController = require('./../controllers/books');

router.post("/", BookController.save);

router.get("/", BookController.getAll);

router.get("/:id", BookController.getById);

router.patch("/:id", BookController.update);

router.delete("/:id", BookController.delete);



module.exports = router;