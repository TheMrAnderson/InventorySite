const setRateLimit = require("express-rate-limit");

// Rate limit middleware
const maxRateLimit = 50;
const rateLimitMiddleware = setRateLimit({
	windowMs: 60 * 1000,
	max: maxRateLimit,
	message: `You have exceeded your ${maxRateLimit} requests per minute limit.`,
	headers: true,
});

module.exports = rateLimitMiddleware;