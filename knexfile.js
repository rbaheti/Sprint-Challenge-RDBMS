// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/project_tracker.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      tableName: 'dbmigrations'
    },
    seeds: {
      directory: './database/seeds',
    },
  },

  production: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      database: 'project_tracker_db',
      user:     'rashmi',
      password: 'pass'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'dbmigrations'
    },
    seeds: {
      directory: './database/seeds',
    },
  }

};
