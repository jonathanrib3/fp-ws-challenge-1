import express from "express";
import router from "./expressRoutes.js";

const expressApp = express();
expressApp.use(router);

export { expressApp };
