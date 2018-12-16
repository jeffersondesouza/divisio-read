const router = require('../utils/buildRouter');
const checkAuth = require('../midleware/check-auth');
const OrdersController = require('./../controllers/order');

router.get("/", checkAuth, OrdersController.getAll);

router.get('/:orderId', checkAuth, OrdersController.getById);

router.post("/", checkAuth, OrdersController.createOrder);

router.delete("/:orderId", checkAuth, OrdersController.deleteOrder);

module.exports = router;