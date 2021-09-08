const passport=require('passport');
const StackExchangeStrategy =require('passport-stack-exchange');
const keys=require('../keys/key');

passport.serializeUser((user,done)=>{
  return done(null,user);
})

passport.deserializeUser((obj,done)=>{
  return done(null,obj)
})


passport.use(new StackExchangeStrategy({
  clientID:keys.ClientID,
  clientSecret:keys.ClientSecret,
  callbackURL:'/auth/stack-exchange/callback',
  stackAppsKey:keys.KEY,
  site: 'stackoverflow'
},
  (accessToken,refreshToken,profile,done)=>{
    process.nextTick(function () {
      console.log('accessToken: ',accessToken);
      console.log('refreshToken: ',refreshToken);
      console.log('profile: ',profile);
      const obj={...profile,accessToken:accessToken,key:keys.KEY}
      return done(null,obj);
  });
  }
))

