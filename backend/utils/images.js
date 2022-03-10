const { check } = require("express-validator");
const { handleValidationErrors } = require("./validation");

const id = check("id").notEmpty().isInt({ min: 0 });
const imageUrl = check("imageUrl")
    .notEmpty()
    .isURL({ require_protocol: false, require_host: false });
const content = check("content").notEmpty();

exports.validateCreate = [
    imageUrl,
    content,
    handleValidationErrors
];

exports.validateUpdate = [
    id,
    imageUrl,
    content,
    handleValidationErrors
]
