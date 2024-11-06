class Member {
    constructor(memberID, teamIDFK, campusOfficeIDFK, vehicleRegNumbFK,
                driverIDFK, eventIDFK, campusOfficeFK, memberName, memberNumber) {
        this.memberID = memberID;
        this.teamIDFK = teamIDFK;
        this.campusOfficeIDFK = campusOfficeIDFK;
        this.vehicleRegNumbFK = vehicleRegNumbFK;
        this.driverIDFK = driverIDFK;
        this.eventIDFK = eventIDFK;
        this.campusOfficeFK = campusOfficeFK;
        this.memberName = memberName;
        this.memberNumber = memberNumber;
    }

    static fromRow(row) {
        return new Member(
            row.member_id,
            row.team_team_id,
            row.team_campus_office_campus_office_id,
            row.vehicle_vehicle_reg_numb,
            row.vehicle_driver_driverID,
            row.event_event_id,
            row.event_campus_office_campus_office_id,
            row.member_name,
            row.member_number
        )
    }
}