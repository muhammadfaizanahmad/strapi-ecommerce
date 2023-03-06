// strapi-api/config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapiEcommerce"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "connect123"),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
    },
    debug: false,
  },
});
