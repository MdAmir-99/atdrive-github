import {NextFunction,Request,Response} from "express";
import {asyncHandler} from "../utils/asyncHandler";

const notFound=asyncHandler((req: Request,res: Response,next: NextFunction) => {
    return res.status(404).send({status: false,message: "404 not found !!"});
})

export default notFound;