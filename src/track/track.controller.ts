import { Body, Controller, Get, Param, Post, Req } from "@nestjs/common";
import { Trackservise } from './track.servise';
import { trackDto } from './dto';
import { Request } from 'express';

@Controller()
export class tracjControler{
    constructor(
        private hello:Trackservise
        ){}
    @Post('/register')
    hellowolrd(@Body()name:trackDto){
        return this.hello.register(name)
    }
    @Post('/login')
    helloworlddd(@Body()name:trackDto){
        return this.hello.login(name)
    }
    @Get('/hello')
    helloworldbydd(@Req() req: Request){
        return this.hello.by(req)
    }
    @Get('/helloget')
    helloget(@Req() req: Request){
        return this.hello.heloget(req)
    }
}