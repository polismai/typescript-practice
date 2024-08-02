import express, { Application } from 'express';
import cors from 'cors';
import routes from './routes/index';

const PORT=3000

const server: Application = express();
server.use( express.json() );
server.use( cors() );
server.use( "/", routes );
server.use( express.static('public') );

export default server
