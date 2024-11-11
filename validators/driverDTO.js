const {body, param, validationResult} = require('express-validator');

const validateDriver = [
    body('driverName')
        .notEmpty()
        .withMessage('driver name is required')
        .isString()
        .withMessage('driver name must be a string'),
    body('driverNumber')
        .notEmpty()
        .withMessage('driver Number must not be empty')
        .isInt()
        .withMessage('driver Number must be Int')
        .isMobilePhone('ar-LB')
        .withMessage('The number should be valid Lebanese Number (Currently doesnt work with landline)'),
    body('driverRegion')
        .notEmpty()
        .withMessage('driver region must not be empty')
        .isString()
        .withMessage('driverRegion must be a string')
        .toLowerCase(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        next();
    }
];

const validateDriverID = [
    param('id').isInt().withMessage('Driver ID must be Int'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const validateRegion = [
    param('id')
        .isString()
        .withMessage('region must be a string')
        .toLowerCase(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]


module.exports = {
    validateDriver,
    validateDriverID,
    validateRegion
};