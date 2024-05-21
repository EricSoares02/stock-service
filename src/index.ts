

import { router } from "./infra/routes/routes";
import { SetupServer } from "./server";
require("dotenv").config();

(async ():Promise<void> =>{
    await new SetupServer(3001, router)
})()


