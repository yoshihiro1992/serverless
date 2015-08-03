/**
 * JAWS App: Config
 */


// Dependencies
var dotenv = require('dotenv').config();

// Require ENV Variables
require('dotenv').load();


/**
 * Configurations
 */

module.exports = {

    // AWS
    aws: {
        admin_access_key: process.env.AWS_ADMIN_ACCESS_KEY,
        admin_secret_access_key: process.env.AWS_ADMIN_SECRET_ACCESS_KEY,
        aws_region: 'us-east-1'
    },

    // JSON Web Token
    jwt: {
        expires_in_seconds: 604800, // 1 week = 604800
        issuer: process.env.JWT_ISSUER,
        secret: process.env.JWT_SECRET
    }

};