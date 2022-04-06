const BUCKET = process.env.AWS_BUCKET_NAME;
const REGION = process.env.AWS_REGION;
const BUCKET_URL = `https://${BUCKET}.s3.${AWS_REGION}.amazonaws.com`;
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
         'img-src': ["'self'", 'data:', 'blob:', BUCKET_URL],
         'media-src': ["'self'", 'data:', 'blob:', BUCKET_URL],
         upgradeInsecureRequests: null,
       },
     },
   },
 },
];
