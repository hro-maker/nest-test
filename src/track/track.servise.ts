import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { trackDto } from './dto';
import { User, UserDocument } from "./schemas/user.model";
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
dotenv.config()
@Injectable()
export class Trackservise{
    constructor(@InjectModel(User.name) private usermodel: Model<UserDocument>){}
    async login(user):Promise< String | Object>  {
        try {
            const userr=await this.usermodel.findOne({email:user.email})
        if(!userr){
                return "user dont found"
        }
        const password=await bcrypt.compare(user.password,userr.password)
            if(!password){
                return "password is incorect"
            }
            const token=jwt.sign({_id:userr._id},process.env.JWT_SECRET,{
                expiresIn: "1h",
              })
            return {userr,token}
        } catch (error) {
            return error.message
        }
     }
     by(req) {
         console.log(req.headers)
         return "by"
     }
     heloget(req) {
         console.log(req.headers)
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

