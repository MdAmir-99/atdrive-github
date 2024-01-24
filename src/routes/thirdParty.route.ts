import express  from 'express';
import {gitHubHandler} from '../controller/gitHubHandler.controller';
import {gitDataValidator} from '../middleware/gitDataValidator';

const route=express.Router();

route.get("/fetchData",gitDataValidator, gitHubHandler);

export default route;