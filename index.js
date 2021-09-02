const express=require('express');
const app=express();
const cookieSession=require('cookie-session');
const passport=require('passport');
require('./services/passport');

app.listen(5000,()=>{
  console.log('Server started on 5000');
})

app.get('/auth/stack-exchange',passport.authenticate('stack-exchange'));

app.get('/auth/stack-exchange/callback',
  passport.authenticate('stack-exchange', { failureRedirect: '/login' }),
  function(req, res) {

    res.redirect('/');
  });
