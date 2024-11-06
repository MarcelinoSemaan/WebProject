class Event {
    constructor(eventID, campusOfficeIDFK, eventName, eventStartDate, eventEndDate,
                eventProblemType, eventProblemDescription, eventLocation) {
        this.eventID = eventID;
        this.campusOfficeIDFK = campusOfficeIDFK;
        this.eventName = eventName;
        this.eventStartDate = eventStartDate;
        this.eventEndDate = eventEndDate;
        this.eventProblemType = eventProblemType;
        this.eventProblemDescription = eventProblemDescription;
        this.eventLocation = eventLocation;
    }

    static fromRow(row) {
        return new Event(
            row.event_id,
            row.campus_offic_campus_office_id,
            row.event_name,
            row.event_start_date,
            row.event_end_date,
            row.event_problem_type,
            row.evemt_problem_description,
            row.event_location
        )
    }
}

module.exports = Event;