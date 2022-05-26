const path = require('path');
// Uncomment to Activate SQLite DB
// module.exports = ({ env }) => ({
//   connection: {
//     client: 'sqlite',
//     connection: {
//       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data1.db')),
//     },
//     useNullAsDefault: true,
//   },
// });

// Uncomment to Activate PostgreSQL DB
const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);
module.exports = ({
  env
}) => ({
  connection: {
    client: 'postgres',
    host: config.host,
    port: config.port,
    database: config.database,
    user: config.user,
    password: config.password,
    ssl: {
      rejectUnauthorized: false
    },
    debug: false,
  },
});


// Uncomment to Activate MySQL DB
// module.exports = ({
//   env
// }) => ({
//   connection: {
//     client: "mysql",
//     connection: {
//       host: env("DATABASE_HOST", "localhost"),
//       port: env("DATABASE_PORT", 3306),
//       database: env("DATABASE_NAME", "default"),
//       user: env("DATABASE_USERNAME", "root"),
//       password: env("DATABASE_PASSWORD", ""),
//     },
//     useNullAsDefault: true,
//   },
// });
