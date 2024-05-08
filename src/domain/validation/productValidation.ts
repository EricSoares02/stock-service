import DefaultError from "../../infra/events/errors/defaultError";
import ValidationData from "./validation";


export default class ProductValidation{


    static execute(data: any, schema:any){

       const t = new ValidationData().execute(data, schema);

        if (!t) {
            throw DefaultError.send('something wrong on data!', data)
        }

        
    }


}