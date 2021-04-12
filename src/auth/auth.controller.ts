import { Body, Controller, Get, Post, Res, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { FileFieldsInterceptor } from "@nestjs/platform-express";
import { LoginDto, UserDto } from "src/track/dto";
import { AuthServise } from './auth.servise';
import {Response} from "express"
@Controller()
export class Authcontroller{
    constructor(private readonly authservise:AuthServise){}   
    @Post('/register')
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'picture', maxCount: 1 },
      ]))
 create(@Body()dto:UserDto,@Res()res:Response,@UploadedFiles() files,){
        try {
            return  this.authservise.register(res,files.picture[0],dto);
            
        } catch (error) {
            return error.message
        }
    };
    @Get('/hello')
    login(){
            return this.authservise.login()
    }
    
   
    
}