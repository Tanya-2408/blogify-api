const multer = require('multer');

module.exports = (err, req, res, next) => {

  // Multer file size error
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        success: false,
        error: { message: 'File too large. Max 5MB allowed' }
      });
    }
  }

  // Multer file type error
  if (err.message === 'Only image files are allowed') {
    return res.status(400).json({
      success: false,
      error: { message: err.message }
    });
  }

  // Default
  res.status(500).json({
    success: false,
    error: { message: err.message || 'Server Error' }
  });
};
