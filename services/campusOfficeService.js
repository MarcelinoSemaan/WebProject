const {initDB} = require('../config/database');
const CampusOffice = require('../models/CampusOfficeModel');

class campusOfficeService {
    constructor() {
        this.pool = null;
        this.init();
    }

    async init() {
        this.pool = await initDB();
    }

    async getAllCampusOffices() {
        try {
            const [rows] = await this.pool.query('SELECT * FROM campus_office');
            return rows.map(CampusOffice.fromRow);
        } catch (e) {
            throw new Error();
        }
    }

    async getCampusOfficeById(id) {
        try {
            const [rows] = await this.pool.query('SELECT * FROM campus_office WHERE campus_office_id = ?', [id]);
            if (rows.length === 0) {
                return null;
            }
            return CampusOffice.fromRow(rows[0]);
        } catch (e) {
            throw new Error();
        }
    }

    async getCampusOfficeByBranch(branch) {
        try {
            const [rows] = await this.pool.query('SELECT * FROM campus_office WHERE campus_office_branch = ?', [branch]);
            if (rows.length === 0) {
                return null;
            }
            return CampusOffice.fromRow(rows[0]);
        } catch (e) {
            throw new Error();
        }
    }

    async createCampusOffice(campusOfficeData) {
        try {
            const {campusOfficeID, campusOfficeBranch, campusOfficeNumber} = campusOfficeData;
            const [] = await this.pool.query(
                'INSERT INTO campus_office (campus_office_id, campus_office_branch, campus_office_number) VALUES (?, ?, ?)'
                , [campusOfficeID, campusOfficeBranch, campusOfficeNumber]);
            const insertedCampusOffice = new CampusOffice(campusOfficeID, campusOfficeBranch, campusOfficeNumber);
            return insertedCampusOffice;
        } catch (e) {
            throw new Error();
        }
    }

    async updateCampusOffice(id, campusOfficeData) {
        try {
            const {campusOfficeBranch, campusOfficeNumber} = campusOfficeData;
            const [result] = await this.pool.query(
                'UPDATE campus_office SET campus_office_branch = ?, campus_office_number = ? WHERE campus_office_id = ?',
                [campusOfficeBranch, campusOfficeNumber, id]);
            return result.affectedRows > 0;
        } catch (e) {
            throw new Error();
        }
    }

    async deleteCampusOffice(id) {
        try {
            const [result] = await this.pool.query('DELETE FROM campus_office WHERE campus_office_id = ?', [id]);
            return result.affectedRows > 0;
        } catch (e) {
            throw new Error();
        }
    }
}

module.exports = new campusOfficeService();