module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd19cd215f26ea1c35d9f655536e27a53'),
  },
});
