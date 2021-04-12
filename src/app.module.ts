import { Module} from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import * as dotenv from 'dotenv'
import { filemodule } from "file/file.mofule";
import { Authmodule } from "./auth/auth.module";
dotenv.config()
@Module({
    imports:[
    MongooseModule.forRoot(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.3l6j1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`),
        Authmodule,
        filemodule
]
})
export class AppModule{}
  // configure(consumer: MiddlewareConsumer) {
    //     //   consumer
    //     //   .apply(LoggerMiddleware)
    //     //   .forRoutes({ path: 'login', method: RequestMethod.POST });
    //   }
    