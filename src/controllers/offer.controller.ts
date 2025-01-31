import { UserService } from "../services/user.service";
import {Response, Request, NextFunction} from 'express'

export class OfferController{
    static async getById(req:Request, res:Response, next:NextFunction){
        try{
            const id = req.params.id
            const offer = await OfferService.getById(id)
            res.status(200).json(offer)
        }catch(error){
            next(error)
        }
    }

    static async getAll(req:Request, res:Response, next: NextFunction){
        try{
            const user = await UserService.getAll()
            res.status(200).json(user)
        }catch(error){
            next(error)
        }
    }
}
