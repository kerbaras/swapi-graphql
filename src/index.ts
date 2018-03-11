import "reflect-metadata"
import { createConnection } from "typeorm"
import { GraphQLServer } from "graphql-yoga"
import { resolvers } from './resolvers'

createConnection()
  .then(async connection => {
    // create express app

    // register express routes from defined application routes
    // Routes.forEach(route => {
    //     (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
    //         const result = (new (route.controller as any))[route.action](req, res, next);
    //         if (result instanceof Promise) {
    //             result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

    //         } else if (result !== null && result !== undefined) {
    //             res.json(result);
    //         }
    //     });
    // });

    // setup express app here
    // ...

    // start express server
    const server = new GraphQLServer({ typeDefs: './src/schema.graphql', resolvers })

    server
      .start()
      .then(() => console.log(`Server started`))
      .catch(e => console.error(e))

  })
  .catch(error => console.log(error))
