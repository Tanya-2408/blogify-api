module.exports = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({
      success: false,
      error: {
        message: `Users with role '${req.user.role}' are not authorized. Required role(s): ${roles.join(', ')}`
      }
    });
  }
  next();
};
