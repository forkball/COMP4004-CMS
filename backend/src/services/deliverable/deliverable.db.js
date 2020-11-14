const Sequelize = require('sequelize');
const tableNames = require('db/tableNames');
const {deliverableSchema} = require('db/schemas');

const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');

  const deliverable = sequelizeClient.define(tableNames.DELIVERABLE, deliverableSchema(DataTypes), {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  deliverable.associate = function(models) {
    deliverable.belongsToMany(models.student, {through: models.submits, foreignKey: 'deliverable_id'});
    deliverable.belongsTo(models.course);
  };

  return deliverable;
};