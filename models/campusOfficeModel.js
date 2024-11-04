class CampusOffice {
    constructor(campusOfficeID, campusOfficeBranch, campusOfficeNumber) {
        this.campusOfficeID = campusOfficeID;
        this.campusOfficeBranch = campusOfficeBranch;
        this.campusOfficeNumber = campusOfficeNumber;
    }

    static fromRow(row) {
        return new CampusOffice(
            row.campus_office_id,
            row.campus_office_branch,
            row.campus_office_number
        );
    }
}

module.exports = CampusOffice;