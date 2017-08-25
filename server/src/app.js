import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes';
import swaggerJSDoc from 'swagger-jsdoc';
import path from 'path';


// Set up the express app
const app = express();
const swaggerDefinition = {
 info: {
  title: 'Hello Books API - Benny Ogidan',
  version: '1.0.0',
  description: 'Demonstrating how to describe a RESTful API with Swagger',
 },
 host: 'localhost:5000',
 basePath: '/api/v1',
};


const options = {
 // import swaggerDefinitions
 swaggerDefinition: swaggerDefinition,
 // path to the API docs
 apis: ['./server/dist/routes/*.js'],



};

const swaggerSpec = swaggerJSDoc(options);

// Log requests to the console.
app.use(logger('dev'));


// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname, '../api-docs/')));
console.log(path.join(__dirname, '../api-docs/'));

app.get('/hellobooks.json', (req, res) => {
 res.setHeader('Content-Type', 'application/json');
 res.send(swaggerSpec);
});
//routes(app);




// Setup a default catch-all route that sends back a welcome message in JSON format.
app.use('/api/v1', routes);
// serve swagger


app.get('*', (req, res) => res.status(404).send({
 message: 'This is a wrong route.',
}));

export default (app);