
import {Schema} from 'zod' 

export default class ValidationData{


    execute(data: any, schema: Schema){

        const result = schema.safeParse(data);
        return result.success
     
    }



}