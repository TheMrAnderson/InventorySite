const setRateLimit = require("express-rate-limit");
const g = require('./global');

// Rate limit middleware
const rateLimitMiddleware = setRateLimit({
	windowMs: 60 * 1000,
	max: g.Globals.maxRateLimit,
	message: `You have exceeded your ${g.Globals.maxRateLimit} requests per minute limit.`,
	headers: true,
});

module.exports = rateLimitMiddleware;