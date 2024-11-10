const driverService = require('../services/driverService');

class driverController {

    async getAllDrivers(req, res) {
        try {
            const driver = await driverService.getAllDrivers();
            res.json(driver);
        } catch (error) {
            console.error('Error fetching driver: ', error);
            res.status(500).json({message: 'Internal server error'});
        }
    }

    async getDriverByID(req, res) {
        try {
            const id = parseInt(req.params.id, 10);
            const driver = await driverService.getDriverByID(id);
            if (!driver) {
                return res.status(404).json({message: 'driver not found'});
            }
            res.json(driver);
        } catch (error) {
            console.error('Error fetching driver: ', error);
            res.status(500).json({message: 'Internal server error'});
        }
    }

    async getDriverByRegion(req, res) {
        try {
            const region = req.params.id;
            const driver = await driverService.getDriverByRegion(region);
            if (!driver) {
                return res.status(404).json({message: 'driver not found'});
            }
            res.json(driver);
        } catch (error) {
            console.error('Error fetching driver: ', error);
            res.status(500).json({message: 'Internal server error'});
        }
    }

    async createDriver(req, res)
    {
        try{
            const {driverID,driverName,driverNumber,driverRegion} =req.body;
            if (!driverID||!driverName || !driverNumber || !driverRegion) {
                return res.status(400).json({message: 'driver id, name, number and region are required'});
            }
            const newDriver = await driverService.createDriver(
                {driverID, driverName, driverNumber, driverRegion});
            res.status(201).json(newDriver);
        }catch (error) {
            console.error('Error creating driver: ', error);
            res.status(500).json({message: 'Internal server error'});
        }
    }

    async updateDriver(req, res) {
        try{
            const id = req.params.id;
            const {driverName,driverNumber,driverRegion} =req.body;
            if (!driverName || !driverNumber || !driverRegion) {
                return res.status(400).json({message: 'driver name, number and region are required'});
            }
            const success = await driverService.updateDriver(id, {driverName,driverNumber,driverRegion});
            if (!success) {
                return res.status(404).json({message: 'driver not found or no changes made'});
            }
            res.json({message: 'driver updated successfully'});
        }catch (error) {
            console.error('Error updating driver: ', error);
            res.status(500).json({message: 'Internal server error'});
        }
    }

    async deleteDriver(req,res){
        try {
            const id = req.params.id;
            const success = await driverService.deleteDriver(id);
            if (!success) {
                return res.status(404).json({message: 'driver is not found'})
            }
            res.json({message: 'driver got deleted'});
        }catch(error){
            console.log('Error deleting driver: ', error);
            res.status(500).json({message: 'Internal server error'});
        }
    }
}

module.exports = new driverController();