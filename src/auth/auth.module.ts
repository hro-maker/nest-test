import { Module } from "@nestjs/common";
import { Authcontroller } from "./auth.controller";
import { AuthServise } from "./auth.servise";



@Module({
    controllers:[Authcontroller],
    providers:[AuthServise]
})
export class Authmodule{}