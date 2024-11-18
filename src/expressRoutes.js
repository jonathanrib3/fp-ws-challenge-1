import { Router } from "express";
import { makeController } from "./calc-controller.js";
import { adaptRoute } from "./express-route-adapter.js";

const router = Router();
const operationsRouter = Router({ mergeParams: true });

const controller = makeController();

operationsRouter.get('/', adaptRoute(controller));

operationsRouter.get('/ping', async (req, res) => {
  res.json({
    message: `So you want to perform a ${req.params.operation} operation huh?`
  });
});

router.use('/:operation', operationsRouter);

export default router;
