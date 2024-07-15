module.exports = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const path = req.originalUrl;

  console.log(`[${timestamp}] ${method} ${path}`);
  next();
};