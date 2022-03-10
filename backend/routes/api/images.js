const express = require('express');
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');
const db = require('../../db/models');

const imageValidations = require('../../utils/images');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const image = await db.Image.findAll();
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

router.put('/:id/edit', requireAuth, imageValidations.validateUpdate, asyncHandler(async (req, res) => {
    const { id, content, imageUrl } = req.body;
    await db.Image.update({ content, imageUrl }, {
        where: { id },
        returning: true
    });
    const image = await db.Image.findOne({
        where: { id: parseInt(id) }
    });
    return res.json(image);
}));

router.delete('/:id', requireAuth, asyncHandler(async (req, res) => {
    const image = await db.Image.findOne({
        where: { id: parseInt(req.params.id) }
    });
    if (!image) throw new Error("Can't find image.");
    await image.destroy();
    return res.json(image.id);
}));

router.post('/new', requireAuth, imageValidations.validateCreate, asyncHandler(async (req, res) => {
    const image = await db.Image.create(req.body);
    res.json(image);
}));


module.exports = router;
