module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
   name: 'strapi::security',
   config: {
     contentSecurityPolicy: {
       useDefaults: true,
       directives: {
         'connect-src': ["'self'", 'https:'],
         'img-src': ["*", "'self'", 'data:', 'blob:', process.env.S3_BUCKET_URL],
         'media-src': ["'self'", 'data:', 'blob:', process.env.S3_BUCKET_URL],
         upgradeInsecureRequests: null,
       },
     },
   },
 },
];
