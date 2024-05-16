
import { IdSchema } from '../../domain/validation/schemas/DefaultId';
import ValidationData from '../../domain/validation/validation';
import { Result } from '../../infra/events/errors/defaultError';
import VariantRepository from './../../infra/database/variantRepository';

type updateStockType = {
    variantId: string, 
    stock: number
}

export class UpdateStock{


    constructor(private VariantRepository: VariantRepository){

    }

    async execute(data: updateStockType){

         
        //VALIDANDO OS DADOS RECEBIDOS
        if(!await new ValidationData().execute(data.variantId, IdSchema)){
            return new Result<Error, updateStockType>(new Error(), data, "Validation Error, Wrong Data!").fail();
        }
   

        //FAZENDO ALTERAÇÃO
        const {id} = await this.VariantRepository.update(data)
      
        if (!id) {
            return new Result<Error, updateStockType>(new Error(), data, "Validation Error, Wrong Data!").fail()
        }

        return new Result<Error, updateStockType>(new Error(), data, "Validation Error, Wrong Data!").success()


    }





    


}