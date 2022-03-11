const express = require('express');
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');
const db = require('../../db/models');

const commentValidations = require('../../utils/comments');

const router = express.Router();

router.get('/:id', asyncHandler(async (req, res) => {
    const comment = await db.Comment.findAll();
    return res.json(comment);
}));

router.put('/:id/edit', requireAuth, commentValidations.validateUpdate, asyncHandler(async (req, res) => {
    const { id, comment } = req.body;
    await db.Comment.update({ comment }, {
        where: { id },
        returning: true,
    });
    const content = await db.Comment.findOne({
        where: { id: parseInt(id) }
    });
    return res.json(content);
}));

router.delete('/:id', requireAuth, asyncHandler(async (req, res) => {
    const content = await db.Comment.findOne({
        where: { id: parseInt(req.params.id) }
    });
    if (!content) throw new Error("Can't find comment.");
    await content.destroy();
    return res.json(content.id);
}));

router.post('/new', requireAuth, commentValidations.validateCreate, asyncHandler(async (req, res) => {
    const comment = await db.Comment.create(req.body);
    res.json(comment);
}));

module.exports = router;
