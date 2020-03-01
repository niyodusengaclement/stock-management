import express from 'express';
import passport from 'passport';
import env from 'dotenv';
import Login from './controller/Login';
require('./config/auth');

env.config();
const router = express.Router()
router.get('/google', passport.authenticate('google', { scope: 'https://www.googleapis.com/auth/userinfo.profile' }));
router.get('/google/callback', passport.authenticate('google', { session: false }), Login.socialLogin);  
router.get('/facebook', passport.authenticate('facebook'));
router.get('/facebook/callback', passport.authenticate('facebook', { session: false }), Login.socialLogin);

export default router;
