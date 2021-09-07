const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    ['/auth/stack-exchange','/api'],
    createProxyMiddleware({
      target: 'http://localhost:5000',
    })
  );
};