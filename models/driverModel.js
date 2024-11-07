class Driver {
    constructor(driverID, driverName, driverNumber, driverRegion) {
        this.driverID = driverID;
        this.driverName = driverName;
        this.driverNumber = driverNumber;
        this.driverRegion = driverRegion;
    }

    static fromRow(row) {
        return new Driver(
            row.driver_id,
            row.driver_name,
            row.driver_number,
            row.driver_region
        )
    }
}
module.exports = Driver;