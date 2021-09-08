const express=require('express');
const app=express();
const cookieSession=require('cookie-session');
const passport=require('passport');
const winston = require('winston');
const morgan=require("morgan");
require('./services/passport');

var logger = new winston.createLogger({
  transports: [
      new winston.transports.File({
          level: 'info',
          filename: './logs/all-logs.log',
          handleExceptions: true,
          json: true,
          maxsize: 5242880, //5MB
          maxFiles: 5,
          colorize: false
      }),
      new winston.transports.Console({
          level: 'debug',
          handleExceptions: true,
          json: false,
          colorize: true
      })
  ],
  exitOnError: false
});


logger.stream = {
  write: function(message, encoding){
      logger.info(message);
  }
};

app.use(morgan("combined", { stream: { write: message => logger.info(message) }}));

app.use(cookieSession({
  age:1000 * 60 * 60 * 24,
  keys:['fceueiveojvf'],
}))
app.use(passport.initialize());
app.use(passport.session());

const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
  logger.info('Server started on 5000')
})


app.get('/api/current_user',(req,res)=>{
  res.send(req.user);
})

app.get('/auth/stack-exchange',passport.authenticate('stack-exchange',{
  scope:['read_inbox','private_info']
}));

if(process.env.NODE_ENV==='production'){
  app.use(express.static('client/build'))
  const path=require('path');
  app.get('*',(req,res)=>{
      res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}

app.get('/auth/stack-exchange/callback',
    passport.authenticate('stack-exchange', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/');
    });

  app.get('/api/logout',(req,res)=>{
    req.logout();
    res.redirect('/');
})
