import express from "express";
import {APIRouter} from "./routes/api.js";
import cors from "cors";
const port = 8089;
const app = express();
// app cors allow all

app.use(cors());
app.use("/api/", APIRouter);


async function start() {
  app.listen(port, () => console.log(`Server started on port ${port}`));
}

export {start};
