module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2db6568cf1c69e62f41ed85b2947cbde'),
  },
});
