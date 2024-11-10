const {initDB} = require('../config/database');
const driver = require ('../models/driverModel');

class driverService{
    constructor(){
        this.pool = null;
        this.init();
    }

    async init()
    {
        this.pool = await initDB();
    }

    async getAllDrivers() {
        try {
            const [rows] = await this.pool.query('SELECT * FROM driver');
            return rows.map(driver.fromRow);
        } catch (e) {
            throw new Error();
        }
    }

    async getDriverByID(id) {
        try {
            const [rows] = await this.pool.query('SELECT * FROM driver WHERE driver_id = ?', [id]);
            return rows.map(driver.fromRow);
        } catch (e) {
            throw new Error();
        }
    }

    async getDriverByRegion(region) {
        try {
            const [rows] = await this.pool.query('SELECT * FROM driver WHERE driver_region = ?', [region]);
            return rows.map(driver.fromRow);
        } catch (e) {
            throw new Error();
        }
    }


    async createDriver(driverData) {
        try {
            const {driverID, driverName, driverNumber, driverRegion} = driverData;
            const [] = await this.pool.query(
                'INSERT INTO driver (driver_id, driver_name, driver_number, driver_region) VALUES (?, ?, ?, ?)',
                [driverID, driverName, driverNumber, driverRegion]);
            const insertedDriver = new driver(driverID,driverName, driverNumber, driverRegion);
            return insertedDriver;
        } catch (e) {
            throw new Error();
        }

    }

    async updateDriver(id, driverData) {
        try {
            const {driverName, driverNumber, driverRegion} = driverData;
            const [result] = await this.pool.query(
                'UPDATE driver SET driver_name = ?, driver_number = ?, driver_region = ? WHERE driver_id = ?',
                [driverName, driverNumber, driverRegion, id]);
            return result.affectedRows > 0;
        } catch (e) {
            throw new Error();
        }
    }

    async deleteDriver(id) {
        try {
            const [result] = await this.pool.query('DELETE FROM driver WHERE driver_id = ?', [id]);
            return result.affectedRows > 0;
        } catch (e) {
            throw new Error();
        }
    }
}

module.exports = new driverService();