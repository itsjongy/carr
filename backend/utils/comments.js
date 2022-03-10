const { check } = require("express-validator");
const { handleValidationErrors } = require("./validation");

const id = check("id").notEmpty().isInt({ min: 0 });
const comment = check("comment").notEmpty();

exports.validateCreate = [
    comment,
    handleValidationErrors
];

exports.validateUpdate = [
    id,
    comment,
    handleValidationErrors
]
