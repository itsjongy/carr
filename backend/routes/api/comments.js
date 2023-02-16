const express = require('express');
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');
const db = require('../../db/models');

const commentValidations = require('../../utils/comments');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const comment = await db.Comment.findAll({
        include: {
            model: db.User
        }
    });
    return res.json(comment);
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const commentId = parseInt(req.params.id, 10);
    const comment = await db.Comment.findOne({
        where: {
            id: commentId,
        },
        include: {
            model: db.User,
        }
    });
    return res.json(comment);
}))

router.put('/:id', requireAuth, commentValidations.validateUpdate, asyncHandler(async (req, res) => {
    const { id, comment } = req.body;
    const content = await db.Comment.update({ comment }, {
        where: { id },
        returning: true,
    });
    return res.json(content[1][0]);
}));

router.delete('/:id',
    requireAuth,
    asyncHandler(async (req, res) => {
        const content = await db.Comment.findOne({
            where: { id: parseInt(req.params.id) }
        });
        if (!content) throw new Error("Can't find comment.");
        await content.destroy();
        return res.json(content.id);
    }));

router.post('/new', requireAuth, commentValidations.validateCreate, asyncHandler(async (req, res) => {
    const comment = await db.Comment.create(req.body);
    return res.json(comment);
}));

module.exports = router;
