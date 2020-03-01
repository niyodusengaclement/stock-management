import passport from 'passport';
import Google from 'passport-google-oauth';
import Facebook from 'passport-facebook';
import env from 'dotenv';
import callback from '../utils/auth';

env.config();
const GoogleStrategy = Google.OAuth2Strategy;
const FacebookStrategy = Facebook.Strategy;

passport.use('google', new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/api/auth/google/callback',
  proxy: true
},  callback));

passport.use('facebook', new FacebookStrategy({
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  callbackURL: '/api/auth/facebook/callback',
  proxy: true
}, callback ));