'use stricts'

exports.message = (res, statusCode, message) => {
    return res.status(statusCode).send({
        message: message
    });
}