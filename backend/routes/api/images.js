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

router.put('/:id', imageValidations.validateCreate, asyncHandler(async (req, res) => {
    const id = req.body.id;
    delete req.body.id;
    await Image.update(req.body, {
        where: { id },
        returning: true,
        plain: true
    });
    const image = await Image.findbyPk(id);
    return res.json(image);
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    const image = await Image.findbyPk(req.params.id);
    if (!image) throw new Error("Can't find image.");

    await Image.destroy({ where: { id: image.id } });
    return res.json({ id: image.id });
}));

router.post('/new', requireAuth, asyncHandler(async (req, res) => {
    const image = await db.Image.create(req.body);
    res.json(image);
}));


module.exports = router;
