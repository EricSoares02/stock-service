

import ValidationData from "./validation";


export default class ProductValidation{


    async execute(data: any, schema:any){

       return await new ValidationData().execute(data, schema);
       
    }

}