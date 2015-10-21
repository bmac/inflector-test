module.exports = function(app) {
  var express = require('express');
  var campusesRouter = express.Router();

  campusesRouter.get('/', function(req, res) {
    res.send({
      'campuses': []
    });
  });

  campusesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  campusesRouter.get('/:id', function(req, res) {
    res.send({
      'campuses': {
        id: req.params.id
      }
    });
  });

  campusesRouter.put('/:id', function(req, res) {
    res.send({
      'campuses': {
        id: req.params.id
      }
    });
  });

  campusesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/campuses', campusesRouter);
};
