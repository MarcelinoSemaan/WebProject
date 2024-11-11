const {initDB} = require('../config/database');
const vehicle = require('../models/vehicleModel');

class vehicleService {
    constructor() {
        this.pool = null;
        this.init();
    }

    async init() {
        this.pool = await initDB();
    }

    async getAllVehicles() {
        try{
            const [rows] = await this.pool.query(
            `SELECT vehicle_reg_numb,
            vehicle_brand,
            vehicle_model,
            vehicle_type,
            vehicle_capacity,
            driver_id
            driver_name,
            driver_number, 
            driver_region
            FROM
            vehicle
            JOIN
            driver ON driver_driverID = driver_id`);
            return rows.map(vehicle.fromRow);
        }catch(e){
            throw new Error();
        }
    }

    async getVehicleByDriverID(driverID)
    {
        try{
            const [rows] = await this.pool.query(`SELECT 
            vehicle_reg_numb,
            vehicle_brand,
            vehicle_model,
            vehicle_type,
            vehicle_capacity,
            driver_id
            driver_name,
            driver_number, 
            driver_region
            FROM
            vehicle
            JOIN
            driver ON driver_driverID = driver_id
            WHERE
            driver_id = ?`, [driverID]);
            return rows.map(vehicle.fromRow);
        } catch(e){
            throw new Error();
        }
    }

    async getVehicleByRegion(region){
        try{
            const [rows] = await this.pool.query(`SELECT 
            vehicle_reg_numb,
            vehicle_brand,
            vehicle_model,
            vehicle_type,
            vehicle_capacity,
            driver_id
            driver_name,
            driver_number, 
            driver_region
            FROM
            vehicle
            JOIN
            driver ON driver_driverID = driver_id
            WHERE
            driver_region = ?`, [region]);
            return rows.map(vehicle.fromRow);
        } catch(e){
            throw new Error();
        }
    }

    async getVehicleByBrand(brand)
    {
        try{
            const [rows] = await this.pool.query(`SELECT 
            vehicle_reg_numb,
            vehicle_brand,
            vehicle_model,
            vehicle_type,
            vehicle_capacity,
            driver_id
            driver_name,
            driver_number, 
            driver_region
            FROM
            vehicle
            JOIN
            driver ON driver_driverID = driver_id
            WHERE
            vehicle_brand = ?`, [brand]);
            return rows.map(vehicle.fromRow);
        } catch(e){
            throw new Error();
        }
    }

    async getVehicleByType(type)
    {
        try{
            const [rows] = await this.pool.query(`SELECT 
            vehicle_reg_numb,
            vehicle_brand,
            vehicle_model,
            vehicle_type,
            vehicle_capacity,
            driver_id
            driver_name,
            driver_number, 
            driver_region
            FROM
            vehicle
            JOIN
            driver ON driver_driverID = driver_id
            WHERE
            vehicle_type = ?`, [type]);
            return rows.map(vehicle.fromRow);
        } catch(e){
            throw new Error();
        }
    }

    async createVehicle(vehicleData) {
        const{vehicleRegNumb,driverIDFK,vehicleBrand,vehicleType,vehicleCapacity} = vehicleData;
        const [] = await this.pool.query(`INSERT INTO vehicle 
            (vehicle_reg_numb, driver_driverID, vehicle_brand, vehicle_model, vehicle_type, vehicle_capacity) VALUES (?,?,?,?,?,?)`,
            [vehicleRegNumb,driverIDFK,vehicleBrand,vehicleType,vehicleCapacity]);
        const insertedVehicle = new vehicle(vehicleRegNumb,driverIDFK,vehicleBrand,vehicleType,vehicleCapacity);
        return insertedVehicle;
    }

    async updateVehicle(vehicleRegNumb, driverID, vehicleData) {
        const{vehicleBrand,vehicleType,vehicleCapacity} = vehicleData;
        const[result] = await this.pool.query(`
        UPDATE vehicle
        SET vehicle_reg_numb = ?,
        driver_driverID = ?,
        vehicle_brand = ?,
        vehicle_model = ?,
        vehicle_type = ?,
        vehicle_capacity = ? WHERE (vehicle_reg_numb = ?) and (driver_driverID = ?)`,
        [vehicleRegNumb,driverID,vehicleBrand,vehicleType,vehicleCapacity,vehicleType,vehicleRegNumb,driverID]);
        return result.affectedRows > 0;
    } catch (e) {
        throw new Error();
    }

    async deleteVehicle(vehicleRegNumb, driverIDFK) {
        try{
            const [result] = await this.pool.query(
                `DELETE FROM vehicle WHERE (vehicle_reg_numb = ?) and (driver_driverID = ?),
                 [vehicleRegNumb,driverIDFK]`)
            return result.affectedRows > 0;
        } catch (e) {
            throw new Error();
        }
    }
}

module.exports = new vehicleService();