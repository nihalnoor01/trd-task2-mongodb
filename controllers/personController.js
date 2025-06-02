// controllers/personController.js
const Person = require('../models/Person');

/* GET /person  ─ list all people */
exports.getAll = async (req, res) => {
  try {
    const people = await Person.find();
    res.json(people);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* POST /person ─ add one person */
exports.createOne = async (req, res) => {
  try {
    const person = await Person.create(req.body);
    res.status(201).json(person);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

/* PUT /person/:id ─ update by ID */
exports.updateOne = async (req, res) => {
  try {
    const updated = await Person.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ message: 'Not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

/* DELETE /person/:id ─ delete by ID */
exports.deleteOne = async (req, res) => {
  try {
    const deleted = await Person.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Person deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
