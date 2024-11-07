const {initDB} = require('../config/database');
const CampusOffice = require('../models/campusOfficeModel');

class campusOfficeService {
    constructor() {
        this.pool = null;
        this.init();
    }

    async init() {
        this.pool = await initDB();
    }

    async getAllCampusOffices() {
        const [rows] = await this.pool.query('SELECT * FROM campus_office');
        return rows.map(CampusOffice.fromRow);
    }

    async getCampusOfficeById(id) {
        const [rows] = await this.pool.query('SELECT * FROM campus_office WHERE campus_office_id = ?', [id]);
        if (rows.length === 0) {
            return null;
        }
        return CampusOffice.fromRow(rows[0]);
    }

    async getCampusOfficeByBranch(branch) {
        const [rows] = await this.pool.query('SELECT * FROM campus_office WHERE campus_office_branch = ?', [branch]);
        if (rows.length === 0) {
            return null;
        }
        return CampusOffice.fromRow(rows[0]);
    }

    async createCampusOffice(campusOfficeData) {
        const {campusOfficeID, campusOfficeBranch, campusOfficeNumber} = campusOfficeData;
        const [] = await this.pool.query(
            'INSERT INTO campus_office (campus_office_id, campus_office_branch, campus_office_number) VALUES (?, ?, ?)'
            , [campusOfficeID, campusOfficeBranch, campusOfficeNumber]);
        const insertedCampusOffice = new CampusOffice(campusOfficeID, campusOfficeBranch, campusOfficeNumber);
        return insertedCampusOffice;
    }

    async updateCampusOffice(id, campusOfficeData) {
        const {campusOfficeBranch, campusOfficeNumber} = campusOfficeData;
        const [result] = await this.pool.query(
            'UPDATE campus_office SET campus_office_branch = ?, campus_office_number = ? WHERE campus_office_id = ?'
            , [campusOfficeBranch, campusOfficeNumber, id]);
        return result.affectedRows > 0;
    }

    async deleteCampusOffice(id) {
        const [result] = await this.pool.query('DELETE FROM campus_office WHERE campus_office_id = ?', [id]);
        return result.affectedRows > 0;
    }
}

module.exports = new campusOfficeService();