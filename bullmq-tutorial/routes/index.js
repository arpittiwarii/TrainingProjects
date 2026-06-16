import express from 'express';
import addJobs from '../controller/addJob.controller.js';

const routes = express.Router();

routes.get('/addJob', addJobs);

export default routes;