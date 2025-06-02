// routes/personRoutes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/personController');

// /person → already prefixed in server.js
router.get('/',       controller.getAll);        // GET /person
router.post('/',      controller.createOne);     // POST /person
router.put('/:id',    controller.updateOne);     // PUT /person/123
router.delete('/:id', controller.deleteOne);     // DELETE /person/123

module.exports = router;
