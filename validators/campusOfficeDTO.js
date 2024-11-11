const {body, param, validationResult} = require('express-validator');

const validateCampusOffice = [
    body('campusOfficeBranch')
        .notEmpty()
        .withMessage('Campus Office Branch must not be empty')
        .isInt()
        .withMessage('Campus Office Branch must be Int'),
    body('campusOfficeNumber')
        .notEmpty()
        .withMessage('Campus Office Branch must not be empty')
        .isInt()
        .withMessage('Campus Office Number must be Int')
        .isMobilePhone('ar-LB')
        .withMessage('The number should be valid Lebanese Number (Currently doesnt work with landline)'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const validateCampusOfficeID = [
    param('id').isInt().withMessage('Campus Office ID must be Int'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];


module.exports = {
    validateCampusOffice,
    validateCampusOfficeID
};