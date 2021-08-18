const methodNotAllowed = (req,res,next) => {
    next({
        staus: 404, 
         message: `${req.method} not allowed for ${req.originalUrl}`
    })
};

module.exports = methodNotAllowed;