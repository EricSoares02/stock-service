

import ValidationData from "./validation";


export default class VariantValidation{


    async execute(data: any, schema:any){

       return await new ValidationData().execute(data, schema);
       
    }

}