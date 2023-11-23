import express from "express";
const path = require('path');
let route = express.Router();
import { getHomePage, getAbout } from "../Controllers/homeControllers";


route.get('/', getHomePage);
route.get('/about', getAbout)


export default route;