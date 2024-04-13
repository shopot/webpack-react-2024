const options = {
  changeOrigin: true,
  secure: false,
  target: 'http://127.0.0.1:3001', // Default target

  onError: (err, _req, _res) => {
    console.log('proxy error', err);
  },
  proxyReq: (proxyReq, req, _res) => {
    console.log('Sending Request to the Target:', req.method, req.url);
  },
  proxyRes: (proxyRes, req, _res) => {
    console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
  },
};

const createProxy = () => {
  return [
    {
      context: '/api/v1',
      ...options,
      target: 'https://127.0.0.1:3001',
    },
  ];
};

module.exports = createProxy;
