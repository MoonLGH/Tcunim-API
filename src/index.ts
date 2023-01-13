process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

import {start} from "./app/app.js";
import fs from "fs";
import path from "path";

(async ()=>{
  const extensionsDir = path.join(process.cwd(), "./dist/extensions");
  const files = fs.readdirSync(extensionsDir, {withFileTypes: true}).filter((dirent) => !dirent.isDirectory()).map((file) => file.name.replace(".js", ""));
  for (const file of files) {
    const exec = await import(path.resolve(extensionsDir, file)+".js");
    if (exec.start) {
      await exec.start();
    }
  }
})();

start();
