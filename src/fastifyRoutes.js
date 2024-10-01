import fastifyOperationAdapter from "./fastifyAdapter.js";

const fastifyRoutes = async (fastify, options) => {
  fastify.post('/sum', async (req, res) => {
    const result = fastifyOperationAdapter(req);

    return res.send(result);
  });

  fastify.post('/sub', async (req, res) => {
    const result = fastifyOperationAdapter(req);

    return res.send(result);
  });

  fastify.post('/mult', async (req, res) => {
    const result = fastifyOperationAdapter(req);

    return res.send(result);
  });

  fastify.post('/div', async (req, res) => {
    const result = fastifyOperationAdapter(req);

    return res.send(result);
  });
}

export default fastifyRoutes;