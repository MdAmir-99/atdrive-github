import {NextFunction,Request,Response} from "express"
import userModel from "../models/user.model";
import {ErrorHandler} from "../utils/ErrorHandler";
import {z} from 'zod';



const getUser=async (req: Request,res: Response,next: NextFunction) => {
    const {id}=req.params;
    const user=await userModel.findOne({userProfile: id});
    if(!user) {
        return next(new ErrorHandler("User not found",400));
    }
    return res.status(200).send({status: true,data: user});
}

const getAllUsers=async (req: Request,res: Response,next: NextFunction) => {
    let pageNumber=Number(req.query.page)||1;
    const limit=Number(req.query.limit)||5;

    const countUser=await userModel.find();

    if(countUser.length<1) {
        return next(new ErrorHandler("Data not found",400))
    }

    if(pageNumber<1) {
        pageNumber=1;
    }
    const skip: number=(pageNumber-1)*limit;

    const pipeline=[
        {$skip: skip},
        {$limit: limit}
    ]
    const user=await userModel.aggregate(pipeline);
    if(user.length===0) {
        return next(new ErrorHandler("No users found",400));
    }
    return res.status(200).send({status: true,totalDocs: countUser.length,data: user});
}


export {getUser,getAllUsers}