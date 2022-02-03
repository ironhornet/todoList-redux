const AppiError = require('../exeptions/apiError')
const tokenService = require('../service/tokenService')

module.exports = function (request, response, next) {
    try {
        const authorizationHeader = request.headers.authorization;
        if (!authorizationHeader) {
            return next(AppiError.UnauthorizedError())
        }

        const acccessToken = authorizationHeader.split(' ')[1]
        if (!acccessToken) {
            return next(AppiError.UnauthorizedError())
        }

        const userData = tokenService.validateAccessToken(acccessToken)
        if (!userData) {
            return next(ApiError.UnauthorizedError())
        }

        request.user = userData;
        next();
    } catch (error) {
        return next(AppiError.UnauthorizedError())
    }
}