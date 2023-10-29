import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function(app: any) {
  app.use(
    '/mge/*',
    createProxyMiddleware({
      target: process.env.REACT_APP_SKW_URL,
      changeOrigin: true,
      onProxyReq: function (proxyReq: any) {
        console.log('Proxing URL: ' + proxyReq.host + ' to ' + process.env.REACT_APP_SKW_URL);
        proxyReq.setHeader('Access-Control-Allow-Credentials', 'true');
        proxyReq.setHeader('Access-Control-Request-Method', '*');
        proxyReq.setHeader('Access-Control-Allow-Methods', '*');
        proxyReq.setHeader('Access-Control-Allow-Headers', '*');
      },
    })
  );
};
