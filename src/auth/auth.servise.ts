import { HttpCode, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FileServise, FileType } from "file/file.servise";
import { Model } from "mongoose";
import { LoginDto, UserDto } from "src/track/dto";
import { User, UserDocument } from "src/track/schemas/user.model";
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthServise{
  constructor(
    @InjectModel(User.name) private TrackModel: Model<UserDocument>,
    private  fileservise:FileServise){}
    async login(){
         const users=await this.TrackModel.find()
          return users
    };
    async register(res,file,dto:UserDto){
      try {
      const conditat=await this.TrackModel.findOne({email:dto.email})
      if(conditat){
        throw Error("user already registred")
      }
      const picturepath=this.fileservise.create(FileType.IMAGE,file)
      dto.password= await bcrypt.hash(dto.password,10)
      const user=this.TrackModel.create({...dto,picture:picturepath})
      console.log("user",user)
      return user
      } catch (er) {
        return er.message
      }
     
    }
}
// HttpCode(HttpStatus.BAD_REQUEST

// import { S3 } from 'aws-sdk';
// import { Logger } from '@nestjs/common';
 // async upload(file) {
    //     const { originalname } = file;
    //     const bucketS3 = 'my-aws-bucket';
    //     await this.uploadS3(file.buffer, bucketS3, originalname);
    // }
    
    // async uploadS3(file, bucket, name) {
    //     const s3 = this.getS3();
    //     const params = {
    //         Bucket: bucket,
    //         Key: String(name),
    //         Body: file,
    //     };
    //     return new Promise((resolve, reject) => {
    //         s3.upload(params, (err, data) => {
    //         if (err) {
    //             Logger.error(err);
    //             reject(err.message);
    //         }
    //         resolve(data);
    //         });
    //     });
    // }
    
    // getS3() {
    //     return new S3({
    //         accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    //         secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    //     });
    // }