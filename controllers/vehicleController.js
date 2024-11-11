const vehicleService = require('../services/vehicleService')


class vehicleController {
    async getAllVehicles(req, res) {
        try {
            const vehicles = await vehicleService.getAllVehicles()
            res.json(vehicles)
        } catch (error) {
            console.error('Error fetching vehicles for the vehicle controller: ', error);
            res.status(500).json({message: 'Internal server error'});
        }
    }

    async getVehicleDriverId(req, res) {
        try {
            const driverID = parseInt(req.params.id, 10);
            const vehicle = await vehicleService.getVehicleByDriverID(driverID);
            if (!vehicle) {
                return res.status(404).json({message: 'vehicle not found'});
            }
            res.json(vehicle);
        } catch (error) {
            console.error('Error fetching driver: ', error);
            res.status(500).json({message: 'Internal server error'});
        }
    }

    async getVehicleByRegion(req, res) {
        try {
            const region = req.params.id;
            const vehicle = await vehicleService.getVehicleByRegion(region);
            if (!vehicle) {
                return res.status(404).json({message: 'vehicle not found'});
            }
            res.json(vehicle);
        } catch (error) {
            console.error('Error fetching driver: ', error);
            res.status(500).json({message: 'Internal server error'});
        }
    }

    async getVehicleByBrand(req, res) {
        try {
            const brand = req.params.id;
            const vehicle = await vehicleService.getVehicleByBrand(brand);
            if (!vehicle) {
                return res.status(404).json({message: 'vehicle not found'});
            }
            res.json(vehicle);
        } catch (error) {
            console.error('Error fetching driver: ', error);
            res.status(500).json({message: 'Internal server error'});
        }
    }

    async getVehicleByType(req, res) {
        try {
            const type = parseInt(req.params.id, 10);
            const vehicle = await vehicleService.getVehicleByType(type);
            if (!vehicle) {
                return res.status(404).json({message: 'vehicle not found'});
            }
            res.json(vehicle);
        } catch (error) {
            console.error('Error fetching driver: ', error);
            res.status(500).json({message: 'Internal server error'});
        }
    }

    async createVehicle(req, res){
        try{
            const {vehicleRegNumb,driverIDFK,vehicleBrand,vehicleType,vehicleCapacity} = req.body;
            if(!vehicleRegNumb || !driverIDFK)
            {
                return res.status(400).json({message: 'Vehicle reg number and driver are req'});
            }
            const newVehicle = await vehicleService.createVehicle(
                {vehicleRegNumb,driverIDFK,vehicleBrand,vehicleType,vehicleCapacity});
            res.status(201).json(newVehicle);
        }catch (error) {
            console.error('Error creating vehicle: ', error);
            res.status(500).json({message: 'Internal server error'});
        }
    }

    async updateVehicle(req,res)
    {
        try{
            const regNumb = req.params.id;
            const driverID = req.params.id2;
            const {vehicleBrand,vehicleType,vehicleCapacity} = req.body;
            if(!regNumb || !driverID)
            {
                return res.status(400).json({message: 'Vehicle reg number and driver are req'});
            }
            const success = await vehicleService.updateVehicle(regNumb,driverID,{vehicleBrand,vehicleType,vehicleCapacity})
            res.status(201).json(success);
            if (!success) {
                return res.status(404).json({message: 'vehicle not found or no changes made'});
            }
            res.json({message: 'driver updated successfully'});
        }catch (error) {
            console.error('Error creating vehicle: ', error);
            res.status(500).json({message: 'Internal server error'});
        }
    }
    async deleteVehicle(req,res){
        try {
            const id = req.params.id;
            const success = await vehicleService.deleteVehicle(id);
            if (!success) {
                return res.status(404).json({message: 'vehicle is not found'})
            }
            res.json({message: 'driver got deleted'});
        }catch(error){
            console.log('Error deleting vehicle: ', error);
            res.status(500).json({message: 'Internal server error'});
        }
    }
}

module.exports = new vehicleController();