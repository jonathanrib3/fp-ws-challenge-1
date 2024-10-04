import express from "express";
import router from "./src/expressRoutes.js";
import Fastify from "fastify";
import fastifyRoutes from "./src/fastifyRoutes.js";

const expressApp = express();
const expressPort = 3000;
const fastify = Fastify();
const fastifyPort = 3001;

expressApp.use(router);
fastify.register(fastifyRoutes);

expressApp.listen(expressPort, () => {
  console.log('Express server running on port ', expressPort);
});

fastify.listen({ port: fastifyPort }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Fastify server listening at ${address}`);
})
