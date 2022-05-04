module.exports = ({
  env
}) => ({
  apiToken: {
    salt: env('API_TOKEN_SALT', 'demo_token_salt'),
  },
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd19cd215f26ea1c35d9f655536e27a53'),
    events: {
      onConnectionSuccess(e) {
        console.log(e.user, e.provider);
      },
      onConnectionError(e) {
        console.error(e.error, e.provider);
      },
    },
    options: {
      expiresIn: "30d",
    }
  },
});
