import express, { Application } from 'express';
import cors from 'cors';

const PORT=3000

const server = express()
server.use(express.json())
server.use(cors())

export default server
