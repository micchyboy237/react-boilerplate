require('dotenv').config({
  path: `../../.env.${process.env.NODE_ENV}`,
});

const env = process.env.NODE_ENV || 'development';
const baseUrl = process.env.BASE_URL; // || 'http://localhost:3000';

console.info(`ENVIRONMENT: ${env}`);
console.info(`PORT: ${baseUrl}`);

module.exports = {
  env,
  baseUrl,
};
