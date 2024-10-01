import { Router } from "express";
import expressOperationAdapter from "./expressAdapter.js";
import { makeController } from "./calc-controller.js";
import { adaptRoute } from "./express-route-adapter.js";

const router = Router();
const operationsRouter = Router({ mergeParams: true });

const controller = makeController();

operationsRouter.get('/', adaptRoute(controller));

// operationsRouter.get('/:a/:b', async (req, res) => {
//   res.send(`gotta do some math with ${req.params.a} and ${req.params.b}`);
// });

operationsRouter.get('/ping', async (req, res) => {
  res.send(`So you want to perform a ${req.params.operation} operation huh?`);
});

router.use('/:operation', operationsRouter);

export default router;
