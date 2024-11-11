const express = require('express');
const vehicleController = require('../controllers/vehicleController')
// const{validateVehicle, validateVehicleId} = require('../validators/vehicleDTO');
// const {validateDriverID} = require('../validators/vehicleDTO');

const router = express.Router();
router.get('/',(req,res) => vehicleController.getAllVehicles(req,res));
router.get('/:id', (req,res) => vehicleController.getVehicleDriverId(req,res));
router.get('/region/:id',(req,res) => vehicleController.getVehicleByRegion(req,res));
router.get('/brand/:id', (req,res) => vehicleController.getVehicleByBrand(req,res));
router.get('/type/:id',(req,res) => vehicleController.getVehicleByType(req,res));
router.post('/:id',  (req,res) => vehicleController.createVehicle(req,res));
router.put('/:id2/:id', (req,res) => vehicleController.updateVehicle(req,res));
router.delete('/:id', (req,res) => vehicleController.deleteVehicle(req,res));

module.exports = router;