import { Router } from "express";
import expressOperationAdapter from "./expressAdapter.js";

const expressRoutes = Router();

expressRoutes.post('/sum', async (req, res) => {
  const result = expressOperationAdapter(req);

  return res.send(result);
});

expressRoutes.post('/sub', async (req, res) => {
  const result = expressOperationAdapter(req);

  return res.send(result);
});

expressRoutes.post('/mult', async (req, res) => {
  const result = expressOperationAdapter(req);

  return res.send(result);
});

expressRoutes.post('/div', async (req, res) => {
  const result = expressOperationAdapter(req);

  return res.send(result);
});

export default expressRoutes;