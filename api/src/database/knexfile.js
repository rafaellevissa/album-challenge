// Update with your config settings.
module.exports = {
  development: {
    client: 'mysql',
    connection: {
      database: 'album_db',
      user:     'root',
      password: null
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations'
    }
  },
};
