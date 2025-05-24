const express = require('express');
const { updateProfile, getProfile } = require('./profileController');
const authMiddleware = require('../api-gateway/auth');
const router = express.Router();

router.post('/', authMiddleware, updateProfile);        // ✅ Protected
router.get('/', authMiddleware, getProfile);            // ✅ Protected

module.exports = router;
