
const AsyncErrorHandler = (value) => {
    return async (req, res, next) => {
        try {
            
            await value(req, res, next)
        } catch (ex) {
            console.log(ex);
            next(ex)
        }
    }
}


const ErrorCatcher = async (err, req, res, next) => {
    err.statusCode = err.statusCode || 500
    console.log(err, 'errrrrr');
    err.message = err.message || "Internal Server Error"

    if(err.name === 'CastError'){
        const message  = `Resource Not Found , Invalid:${err.path}`
    }

    res.status(err.statusCode).json({
        success: false,
        error: {
            message: err.message,
            statusCode: err.statusCode
        }
    })
}

module.exports = { AsyncErrorHandler, ErrorCatcher }