import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./schemas/user.model";
import { tracjControler } from './track.controller';
import { Trackservise } from "./track.servise";
@Module({
    imports:[MongooseModule.forFeature([{name:User.name,schema:UserSchema}])],
    controllers:[tracjControler],
    providers:[Trackservise]
})
export class TrackModule{

}