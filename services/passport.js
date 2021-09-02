const passport=require('passport');
const StackExchangeStrategy =require('passport-stack-exchange');
const keys=require('../keys/dev');

passport.use(new StackExchangeStrategy({
  clientID:keys.ClientID,
  clientSecret:keys.ClientSecret,
  callbackURL:'http://localhost:3000/',
  stackAppsKey:keys.KEY,
  site: 'stackoverflow'
},
  (accessToken,refreshToken,profile,done)=>{
    console.log('accessToken: ',accessToken);
    console.log('refreshToken: ',refreshToken);
    console.log('profile: ',profile);
  }
))