import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Trackservise } from './track.servise';
import { trackDto } from './dto';

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
    helloworldbydd(){
        return this.hello.by()
    }
}