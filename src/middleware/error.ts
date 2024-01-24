import {NextFunction, Request, Response} from "express";
import {ErrorHandler} from "../utils/ErrorHandler";


export const errorMiddleware = (err: any,req: Request,res: Response,next: NextFunction) => {
    err.statusCode=err.statusCode||500;
    err.message=err.message||"Something went wrong";

    if(err.code===11000) {
        const message=`Duplicate ${Object.keys(err.keyValue)} entered`
        err=new ErrorHandler(message,400);
    }

    res.status(err.statusCode).send({
        status: false,
        message: err.message
    });
};