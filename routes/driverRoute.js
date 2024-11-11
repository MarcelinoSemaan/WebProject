const express = require('express');
const driverController = require('../controllers/driverController');
const {validateDriver, validateDriverID, validateRegion} = require('../validators/driverDTO');

const router = express.Router();
router.get('/',(req,res)=>driverController.getAllDrivers(req,res));
router.get('/:id', validateDriverID, (req,res) => driverController.getDriverByID(req,res));
router.get('/region/:id', validateRegion, (req, res) => driverController.getDriverByRegion(req,res));
router.post('/', validateDriver, (req, res) => driverController.createDriver(req,res));
router.put('/:id', [validateDriver, validateDriverID], (req,res) => driverController.updateDriver(req,res));
router.delete('/:id', (req, res) => driverController.deleteDriver(req,res));

module.exports = router;
