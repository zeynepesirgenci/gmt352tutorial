
const fs = require('fs');
var promise = require('bluebird');
var CONFIG = require('./appConfig');
var pgp = require('pg-promise')(options);
var DATABASE_PGB = pgp(CONFIG.database.postgres);

module.exports = {
       getAllLocations: getAllLocations
};

var options = {
    promiseLib: promise
};

function getAllLocations(cb) {
      DATABASE_PGB.any('SELECT ST_X(loc) as longitude, ST_Y(loc) as latitude from trees')
      .then(function (data) {
         cb(null, data);})
       .catch(function (err) {
          cb(err)});
}
