const express = require('express');
const router = express.Router();
const followController = require('./follow-controller');
const authController = require('../auth/auth-controller');

router.post('/followEndLike', authController.authorize, followController.followEndLike);
router.post('/fixFollowBugs', authController.authorize, followController.fixFollowBugs);
router.post('/unfollow', authController.authorize, followController.unfollow);
router.post('/getFollowing', authController.authorize, followController.getFollowing);

module.exports = router;