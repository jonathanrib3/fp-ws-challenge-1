import { makeController } from "./calc-controller.js";
import { adaptRoute } from "./fastify-route-adapter.js";

const controller = makeController();

const fastifyRoutes = async (fastify, options) => {
  fastify.get('/:operation', adaptRoute(controller));

  fastify.get('/ping', async (req, res) =>
    res.send(`So you want to perform a ${req.params.operation} operation huh?`)
  );
};

export default fastifyRoutes;