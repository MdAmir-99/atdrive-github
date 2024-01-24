import axios from "axios";
import {NextFunction,Request,Response} from "express";
import {dataFormatter,generateOptions} from "../../utils/generateOptions";

interface CustomRequest extends Request {
    formattedData: any;
}
export const gitDataValidator=async (req: CustomRequest,res: Response,next: NextFunction) => {
    const options=generateOptions('/users');
    const {data}=await axios.get(options.hostname+options.path,options);
    const formattedData=dataFormatter(data);

    req.formattedData=formattedData;
    next();
}