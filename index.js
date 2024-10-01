import express from "express";
import expressRoutes from "./src/expressRoutes.js";
import Fastify from 'fastify'
import fastifyRoutes from "./src/fastifyRoutes.js";

const expressApp = express()
const expressPort = 3000
const fastify = Fastify()
const fastifyPort = 3001

expressApp.use(expressRoutes);
fastify.register(fastifyRoutes);

expressApp.listen(expressPort, () => {
  console.log('Express calculator running on port ', expressPort)
});

fastify.listen({ port: fastifyPort }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
})