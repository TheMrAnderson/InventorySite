const setRateLimit = require("express-rate-limit");

// Rate limit middleware
const maxLimit = 20;

const rateLimitMiddleware = setRateLimit({
	windowMs: 60 * 1000,
	max: maxLimit,
	message: `You have exceeded your ${maxLimit} requests per minute limit.`,
	headers: true,
});

module.exports = rateLimitMiddleware;