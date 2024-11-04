class Employee {
    constructor(employeeID, schoolIDFK, employeeName, employeeType, employeeContact) {
        this.employeeID = employeeID;
        this.schoolIDFK = schoolIDFK;
        this.employeeName = employeeName;
        this.employeeType = employeeType;
        this.employeeContact = employeeContact;
    }

    static fromRow(row) {
        return new Employee(
            row.employee_id,
            row.school_school_id,
            row.employee_name,
            row.employee_type,
            row.employee_contact
        )
    }
}

module.exports = Employee;