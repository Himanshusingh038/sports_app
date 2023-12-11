const config = {
  development: {
    server: {
      port: 3000,
      host: 'localhost'
    },
    database: {
      host: 'db',
      port: 3306,
      username: 'myuser',
      password: 'mypassword',
      database: 'mydb'
    },
  },
  test: {
    server: {
      port: 3001,
      host: 'localhost'
    },
    database: {
      host: 'localhost',
      port: 3306,
      username: 'myuser',
      password: 'mypassword',
      database: 'mydb'
    },
  }
};

const env = process.env.NODE_ENV || 'test';

const configuration = config[env];

module.exports = configuration;