import { MiddlewareConsumer, Module, RequestMethod } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { LoggerMiddleware } from "./track/middlwer/login.midleware";
import { TrackModule } from "./track/track.module";
import * as dotenv from 'dotenv'
dotenv.config()

import { tracjControler } from './track/track.controller';
@Module({
    imports:[
    MongooseModule.forRoot(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.3l6j1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`),
        TrackModule
    ]
})
export class AppModule{
    configure(consumer: MiddlewareConsumer) {
        consumer
          .apply(LoggerMiddleware)
          .forRoutes(tracjControler);
      }
      
}
// { path: 'hy', method: RequestMethod.GET }