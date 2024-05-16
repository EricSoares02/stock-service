
import {Schema} from 'zod' 

export default class ValidationData{


    execute(data: any, schema: Schema){

        const result = schema.safeParse(data);
        if (!result.success) {
            return false
        }
        return true
    }



}