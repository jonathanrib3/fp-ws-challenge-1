import { expressApp } from "./src/expressApp.js";
import { buildFastifyApp } from "./src/buildFastifyApp.js";

const expressPort = 3000;
const fastifyPort = 3001;
const fastifyApp = buildFastifyApp()

expressApp.listen(expressPort, () => {
  console.log('Express server running on port ', expressPort);
});

fastifyApp.listen({ port: fastifyPort }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Fastify server listening at ${address}`);
});
