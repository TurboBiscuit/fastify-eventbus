import fp from 'fastify-plugin'
import {
    EventEmitter
} from 'events'
export default fp((fastify, options, next) => {
    fastify.decorate('eventbus', new EventEmitter())
    next()
}, {
    fastify: '>=1.0.0',
    name: 'fastify-eventbus'
})