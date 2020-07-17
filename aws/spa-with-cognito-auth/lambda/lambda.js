const awsServerlessExpress = require('aws-serverless-express');
const { app } = require('./src/app');
const { getMimeTypesToGzip } = require('./src/mime-types')

const server = awsServerlessExpress.createServer(app, null, getMimeTypesToGzip());
exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context);