import { Controller, Get, Post, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { FileFieldsInterceptor } from "@nestjs/platform-express";
import { AuthServise } from './auth.servise';
@Controller('/auth')
export class Authcontroller{
    constructor(private readonly authservise:AuthServise){}
    @Post('upload')
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'picture', maxCount: 1 },
      ]))
     create(@UploadedFiles() files){
          return this.authservise.upload(files.picture[0])
    }
}