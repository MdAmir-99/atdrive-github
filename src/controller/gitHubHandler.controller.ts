import axios from "axios";
import {NextFunction,Request,Response} from "express";
import {asyncHandler} from "../utils/asyncHandler";
import userModel from "../models/user.model";


interface CustomRequest extends Request {
    formattedData: any;
}

export const gitHubHandler=asyncHandler(async (req: CustomRequest,res: Response,next: NextFunction) => {
    const data=req.formattedData;
    await userModel.create(data);
    return res.status(201).send({status: true,message: "Data Inserted Successfully !!"})
});