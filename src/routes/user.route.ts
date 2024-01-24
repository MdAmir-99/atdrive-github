import express from 'express';
import {getAllUsers,getUser} from '../controller/user.controller';

const route=express.Router();


route.get("/getData/:id",getUser)
route.get("/getAllData",getAllUsers)

export default route;