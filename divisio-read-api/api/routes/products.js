const router = require('../utils/buildRouter');
const multer = require('multer');

const checkAuth = require('../midleware/check-auth');
const ProductDAO = require('../models/product/ProductDAO')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const fileFilter = function (req, file, cb) {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter
});

router.get('/', (req, res, next) => {

    ProductDAO.listAll()
        .then(doc => {
            res.status(200).json({
                products: doc
            });
        })
        .catch(error => {
            res.status(500).json({
                message: 'Error during loading',
                error
            });
        });
});


router.post('/', checkAuth, upload.single('productImage'), (req, res, next) => {

    ProductDAO.save(req)
        .then(result => {
            res.status(201).json({
                message: 'Handling a POST requess to products',
                product: result
            });

        })
        .catch(error => {
            res.status(500).json({
                message: 'Could mot create the product',
                error
            });
        });
});



router.get('/:productId', (req, res, next) => {

    ProductDAO
        .findById(req.params.productId)
        .then(product => {
            if (product) {
                res.status(200).json({
                    product
                });
            } else {
                res.status(404).json({
                    message: 'Product not found'
                });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: 'Product not found',
                error
            });
        });
});


router.patch('/:productId', checkAuth, (req, res, next) => {

    ProductDAO.update(req.params.productId, req)
        .then(product => {
            res.status(200).json({
                message: 'Update product',
                product
            });
        })
        .catch(error => {
            res.status(500).json({
                message: 'Product not updated',
                error
            });
        });
});


router.delete('/:productId', checkAuth, (req, res, next) => {

    ProductDAO
        .remove(req.params.productId)
        .then(docs => {
            res.status(200).json({
                message: 'Product removed wth success',
            });

        })
        .catch(error => {
            res.status(500).json({
                message: 'Could not remove the product',
                error
            });

        })
});


module.exports = router;

