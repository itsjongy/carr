const express = require('express');
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');


const db = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const image = await Image.findAll();
    return res.json(image);
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const imageId = parseInt(req.params.id, 10);
    const image = await db.Image.findOne({
        where: {
            id: imageId,
        },
        include: {
            model: db.User,
        }
    });
    return res.json(image);
}));

router.post('/new', requireAuth, asyncHandler(async (req, res) => {
    const image = await db.Image.create(req.body);
    res.json(image);
}));

module.exports = router;
