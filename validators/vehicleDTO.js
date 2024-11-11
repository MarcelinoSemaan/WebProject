const {body, param, validationResult} = require('express-validator');

const validateVehicle=[
    body['vehicleBrand']
        .isString()
        .withMessage('Vehicle Brand must be string')
        .toLowerCase(),
    body['vehicleType']
        .isInt()
        .withMessage('Vehicle type must be int'),
    body['vehicleCapacity']
        .isInt()
        .withMessage('Vehicle Capacity must be int'),
        (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        next();
    }
];

const validateVehicleId =[
    param('id')
        .isInt()
        .withMessage('Vehicle Numb must be an integer'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]

// const validateDriverID = [
//     param('id')
//         .isInt()
//         .withMessage('driver ID must be Int'),
//     (req, res, next) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array() });
//         }
//         next();
//     }
// ]

module.exports = [
    validateVehicle,
    validateVehicleId,

]