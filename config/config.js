var fs = require("fs");
module.exports = {
  "development": {
    "username": "	sj2boszs0ej120yc",
    "password": "p4xydaql7vadt72w",
    "database": "w82dzrlshj9zw8bx",
    "host": "	s3lkt7lynu0uthj8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    "dialect": "mysql"
  },
  "test": {
    "username": "sj2boszs0ej120yc",
    "password": "p4xydaql7vadt72w",
    "database": "w82dzrlshj9zw8bx",
    "host": "s3lkt7lynu0uthj8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    "dialect": "mysql",
    
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
}
