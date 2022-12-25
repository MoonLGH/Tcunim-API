import * as Express from "express";
import fs from "fs";
import path from "path";
const APIRouter = Express.Router();

APIRouter.get("/ping", function(req:Express.Request, res:Express.Response) {
  res.status(200).json({
    message: "hello world",
  });
});

APIRouter.get("/getExtensions", function(req:Express.Request, res:Express.Response) {
  const extensionsDir = path.join(process.cwd(), "./dist/extensions");

  const files = fs.readdirSync(extensionsDir).map((file) => file.replace(".js", ""));
  res.status(200).json(files);
});

APIRouter.get("/extension", function(req:Express.Request, res:Express.Response) {
  const {extension} = req.query;
  import(path.join(process.cwd(), `./dist/extensions/${(extension as string).toLowerCase()}.js`)).then(res.status(200).send.bind(res)).catch((err) =>{
    res.status(500).send(err);
  });
});

APIRouter.get("/getHome", function(req:Express.Request, res:Express.Response) {
  const {provider} = req.query;
  import(path.join(process.cwd(), `./dist/extensions/${(provider as string).toLowerCase()}.js`)).then((res) =>{
    res.getHome().then(res.status(200).send.bind(res));
  }).catch((err) =>{
    res.status(500).send(err);
  });
});
export {APIRouter};
