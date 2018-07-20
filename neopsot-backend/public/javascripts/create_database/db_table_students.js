var connection_db = require('./db_connect_postgre');
const Sequelize = require('sequelize');

/**
 * Create Table Users
 */
const Students = connection_db.define('students', {
    fullName: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    student_id: { type: Sequelize.STRING },
    phone_number: { type: Sequelize.STRING },
    address: { type: Sequelize.STRING },
    role: { type: Sequelize.INTEGER },
    isDelete: { type: Sequelize.BOOLEAN, defaultValue: false }
});

Students.sync();

module.exports = Students;

