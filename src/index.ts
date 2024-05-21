import { router } from "./appllication/controllers/routes";
import { SetupRabbitMQ } from "./infra/messages/broker/rabbitMQ";
import { SetupServer } from "./server";
require("dotenv").config();

(async (): Promise<void> => {
  await new SetupServer(3001, router);

  await new SetupRabbitMQ();
})();
