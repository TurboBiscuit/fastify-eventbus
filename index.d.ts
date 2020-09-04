import { EventEmitter } from "events";
declare module "fastify" {
  interface FastifyInstance {
    eventbus: EventEmitter;
  }
}
