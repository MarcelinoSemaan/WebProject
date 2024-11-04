class Team {
    constructor(teamID, campusOfficeIDFK, teamName, teamLeader) {
        this.teamID = teamID;
        this.campusOfficeIDFK = campusOfficeIDFK;
        this.teamName = teamName;
        this.teamLeader = teamLeader;
    }

    static fromRow(row) {
        return new Team(
            row.team_id,
            row.campus_office_campus_office_id,
            row.team_name,
            row.team_name
        )
    }
}

module.exports = CampusOffice;