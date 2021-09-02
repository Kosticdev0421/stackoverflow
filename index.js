const express=require('express');
const app=express();
const cookieSession=require('cookie-session');
const passport=require('passport');
require('./services/passport');

app.use(cookieSession({
  age:1000 * 60 * 60 * 24,
  keys:['fceueiveojvf'],
}))
app.use(passport.initialize());
app.use(passport.session());
app.listen(5000,()=>{
  console.log('Server started on 5000');
})


app.get('/api/current_user',(req,res)=>{
  res.send(req.user);
})

app.get('/auth/stack-exchange',passport.authenticate('stack-exchange'));

app.get('/auth/stack-exchange/callback',
  passport.authenticate('stack-exchange', { failureRedirect: '/auth/stack-exchange' }),
  function(req, res) {
    res.redirect('/');
  });
