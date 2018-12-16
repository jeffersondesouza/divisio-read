const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    
    
    try {

        const token = req.headers.authorization.split(/\s/)[1]
        console.log('req', token);


        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decoded;

        next();
    } catch (error) {
        console.log('error', error);
        return res.status(401).json({
            message: 'auth fail!',
        });
    }



}