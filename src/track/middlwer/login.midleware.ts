import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
dotenv.config()
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {


    try {
      if(!req.headers.authorization){
        return res.status(400).json({message:"require "})
      }
     const token= req.headers.authorization.split(" ")[1]
  let verif
   jwt.verify(`${token}`,`${process.env.JWT_SECRET}`,(err,data)=>{
          if(err){
            return res.status(400).json(err)
          }
          if(data){
            verif=data
          }
  })
        req.headers.user=verif
      next();
    } catch (error) {
      return res.status(400).json({error})
    }
    
  }
}