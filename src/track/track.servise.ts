import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { trackDto } from './dto';
import { User, UserDocument } from "./schemas/user.model";
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken'
@Injectable()
export class Trackservise{
    constructor(@InjectModel(User.name) private usermodel: Model<UserDocument>){}
    async login(user):Promise< String | UserDocument>  {
        try {
            const userr=await this.usermodel.findOne({email:user.email})
        if(!userr){
                return "user dont found"
        }
        const password=await bcrypt.compare(user.password,userr.password)
            if(!password){
                return "password is incorect"
            }
            // const newuser=jwt.sign({userr._id},"hello")
            return userr
        } catch (error) {
            return error.message
        }
        
     }
     by() {
         return "by"
     }
     heloget() {
         return "hello world"
     }
    async register(dto:trackDto):Promise< String | UserDocument> {
                  const conditat= await this.usermodel.findOne({email:dto.email})
                  if(conditat){
                      return new Error("user already registret").message
                  }
                  dto.password= await bcrypt.hash(dto.password,10)
                    const user=await this.usermodel.create(dto)
                    return user
    }
}

