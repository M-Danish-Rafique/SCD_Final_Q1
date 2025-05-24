const express = require('express');
const { addComment, getComments } = require('../CommentService/commentController');
const authMiddleware = require('../api-gateway/auth');
const router = express.Router();

router.post('/', authMiddleware, addComment);           // ✅ Protected
router.get('/:blogId', getComments);                    // ❌ Public

module.exports = router;
