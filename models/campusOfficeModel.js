class CampusOffice{
    constructor(campusOfficeID, campusOfficeBranch, campusOfficeNumber)
    {
        this.campusOfficeID = campusOfficeID;
        this.campusOfficeBranch = campusOfficeBranch;
        this.campusOfficeNumber = campusOfficeNumber;
    }

    getCampusOfficeID()
    {
        return this.campusOfficeID;
    }

    getCampusOfficeBranch()
    {
        return this.campusOfficeBranch;
    }

    getCampusOfficeBranch(id)
    {
        if(id === this.campusOfficeID)
            return this.campusOfficeBranch;
        else
            return this.campusOfficeBranch = "Balamand";
    }

    getCampusOfficeNumber()
    {
        return this.campusOfficeNumber;
    }

    getCampusOfficeNumber(id)
    {
        if(id === this.campusOfficeID) {
            return this.campusOfficeNumber;
        }
    }
}
module.exports = CampusOffice;