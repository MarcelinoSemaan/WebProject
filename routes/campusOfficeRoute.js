const express = require('express');
const campusOfficeController = require('../controllers/campusOfficeController');
const {validateCampusOfficeID, validateCampusOffice} = require("../validators/campusOfficeDTO");

const router = express.Router();

// Define routes
router.get('/', (req, res) => campusOfficeController.getAllCampusOffices(req, res));
router.get('/:id', validateCampusOfficeID, (req, res) => campusOfficeController.getCampusOfficeById(req, res));
router.get('/branch/:id', validateCampusOfficeID, (req, res) => campusOfficeController.getCampusOfficeByBranch(req, res));
router.post('/', validateCampusOffice,(req, res) => campusOfficeController.createCampusOffice(req, res));
router.put('/:id', [validateCampusOfficeID, validateCampusOffice], (req, res) => campusOfficeController.updateCampusOffice(req, res));
router.delete('/:id', (req, res) => campusOfficeController.deleteCampusOffice(req, res));

module.exports = router;
