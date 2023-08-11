const Sequelize = require('sequelize');

const sequelize =  new Sequelize('railway', 'root', 'zIait2wG9DmYCdImOapq', {
    host: 'containers-us-west-97.railway.app',
    port:5757,
    dialect: 'mysql'
    });

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
            });

module.exports = sequelize;
