class Vehicle{
    constructor(vehicleRegNumb, driverIDFK, vehicleBrand, vehicleType, vehicleCapacity)
    {
        this.vehicleRegNumb = vehicleRegNumb;
        this.driverIDFK = driverIDFK;
        this.vehicleBrand = vehicleBrand;
        this.vehicleType = vehicleType;
        this.vehicleCapacity = vehicleCapacity;
    }

    static fromRow(row) {
        return new Vehicle(
            row.vehicle_reg_numb,
            row.driver_driverID,
            row.vehicle_brand,
            row_vehicleType,
            row.vehilce_capacity
        )
    }
}

module.exports = Vehicle;