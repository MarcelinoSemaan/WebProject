const express = require('express');
const campusOfficeController = require('../controller/campusOfficeController');

const router = express.Router();

// Define routes
router.get('/', (req, res) => campusOfficeController.getAllCampusOffices(req,res));
router.get('/:id', (req, res) => campusOfficeController.getCampusOfficeById(req, res));
router.get('/branch/:id', (req, res) => campusOfficeController.getCampusOfficeByBranch(req, res));
router.post('/', (req, res) => campusOfficeController.createCampusOffice(req, res));
router.put('/:id', (req, res) => campusOfficeController.updateCampusOffice(req, res));
router.delete('/:id', (req, res) => campusOfficeController.deleteCampusOffice(req, res));

module.exports = router;
