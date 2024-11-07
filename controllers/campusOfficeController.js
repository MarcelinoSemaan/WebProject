const campusOfficeService = require('../services/campusOfficeService')

class CampusOfficeController {

    async getAllCampusOffices(req, res) {
        try {
            const campusOffice = await campusOfficeService.getAllCampusOffices();
            res.json(campusOffice);
        } catch (error) {
            console.error('Error fetching campus office:', error);
            res.status(500).json({message: 'Internal server error'});
        }

    }

    async getCampusOfficeById(req, res) {
        try {
            const id = parseInt(req.params.id, 10);
            const campusOffice = await campusOfficeService.getCampusOfficeById(id);
            if (!campusOffice) {
                return res.status(404).json({message: 'campus office not found'});
            }
            res.json(campusOffice);
        } catch (error) {
            console.error('Error fetching campus office:', error);
            res.status(500).json({message: 'Internal server error'});
        }
    }

    async getCampusOfficeByBranch(req, res) {
        try {
            const branch = req.params.id;
            const campusOffice = await campusOfficeService.getCampusOfficeByBranch(branch);
            if (!campusOffice) {
                return res.status(404).json({message: 'campus office not found'});
            }
            res.json(campusOffice);
        } catch (error) {
            console.error('Error fetching campus office:', error);
            res.status(500).json({message: 'Internal server error'});
        }
    }

    async createCampusOffice(req, res) {
        try {
            const {campusOfficeID, campusOfficeBranch, campusOfficeNumber} = req.body;
            if (!campusOfficeID || !campusOfficeBranch || !campusOfficeNumber) {
                return res.status(400).json({message: 'id, number and branch are required'});
            }
            const newCampusOffice = await campusOfficeService.createCampusOffice(
                {campusOfficeID, campusOfficeBranch, campusOfficeNumber});
            res.status(201).json(newCampusOffice);
        } catch (error) {
            console.error('Error creating CampusOffice:', error);
            res.status(500).json({message: 'Internal server error'});
        }
    }

    async updateCampusOffice(req, res) {
        try {
            const id = parseInt(req.params.id, 10);
            const {campusOfficeBranch, campusOfficeNumber} = req.body;
            if (!campusOfficeBranch || !campusOfficeNumber) {
                return res.status(400).json({message: 'Number and Branch are required'});
            }
            const success = await campusOfficeService.updateCampusOffice(id, {campusOfficeBranch, campusOfficeNumber});
            if (!success) {
                return res.status(404).json({message: 'campus office not found or no changes made'});
            }
            res.json({message: 'campus office updated successfully'});
        } catch (error) {
            console.error('Error updating campus:', error);
            res.status(500).json({message: 'Internal server error'});
        }
    }

    async deleteCampusOffice(req, res) {
        try {
            const id = parseInt(req.params.id, 10);
            const success = await campusOfficeService.deleteCampusOffice(id);
            if (!success) {
                return res.status(404).json({message: 'Campus office not found'});
            }
            res.json({message: 'Country deleted successfully'});
        } catch (error) {
            console.error('Error deleting campus office:', error);
            res.status(500).json({message: 'Internal server error'});
        }
    }
}

module.exports = new CampusOfficeController();