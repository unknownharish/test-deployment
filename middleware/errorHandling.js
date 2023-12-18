exports.errorHandler = (err, req, res, next) => {
    console.error(err.stack);
  
    if (err.name === 'ValidationError') {
      res.status(400).json({ error: 'Validation Error', details: err.errors });
    } else {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  