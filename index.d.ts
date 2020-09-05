import { EventEmitter } from "events";
declare module "fastify" {
  interface FastifyInstance {
    eventbus: EventEmitter;
  }
}

declare const fastifyEventBus: FastifyPlugin;
export default fastifyEventBus;
