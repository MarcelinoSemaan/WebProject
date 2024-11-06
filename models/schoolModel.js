class School {
    constructor(schoolID, eventIDFK, campusOfficeIDFK, schoolName, schoolRegion, schoolNumber) {
        this.schoolID = schoolID;
        this.eventIDFK = eventIDFK;
        this.campusOfficeIDFK = campusOfficeIDFK;
        this.schoolName = schoolName;
        this.schoolRegion = schoolRegion;
        this.schoolNumber = schoolNumber;
    }

    static fromRow(row) {
        return new School(
            row.school_id,
            row.event_event_id,
            row.event_campus_office_campus_office_id,
            row.school_name,
            row.school_region,
            row.school_number
        )
    }
}

module.exports = School;