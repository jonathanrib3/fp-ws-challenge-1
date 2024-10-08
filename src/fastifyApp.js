import Fastify from "fastify";
import router from "./fastifyRoutes.js";

const fastifyApp = Fastify();
fastifyApp.register(router);

export { fastifyApp };
