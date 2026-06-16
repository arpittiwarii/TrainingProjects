module.exports = {
  "development": {
    "username": "postgres",
    "password": 'root',
    "database": "library_db",
    "host": "postgres",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "postgres",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "postgres",
    "dialect": "postgres"
  }
}
