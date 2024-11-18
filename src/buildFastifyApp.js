import Fastify from "fastify";
import router from "./fastifyRoutes.js";

const buildFastifyApp = () => {
  const fastifyApp = Fastify();
  fastifyApp.register(router);

  return fastifyApp;
}

export { buildFastifyApp };
