import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { FileServise } from "file/file.servise";
import { User, UserSchema } from "src/track/schemas/user.model";
import { Authcontroller } from "./auth.controller";
import { AuthServise } from "./auth.servise";
import { ServeStaticModule } from '@nestjs/serve-static';
import path from "path";


@Module({
    imports:[
        MongooseModule.forFeature([{name:User.name,schema:UserSchema}]),
    ],
    controllers:[Authcontroller],
    providers:[AuthServise,FileServise]
})
export class Authmodule{}