
import Variant from '../../domain/entities/Variants';
import { ReturnCreateVariantType } from '../../domain/types/variant';
import { VariantArraySchema, VariantSchema } from '../../domain/validation/schemas/Variant';
import VariantValidation from '../../domain/validation/variantValidation';
import { Result } from '../../infra/events/errors/defaultError';
import VariantRepository from './../../infra/database/variantRepository';

export class AddVariant{


    constructor(private VariantRepository: VariantRepository){

    }

    async executeMany(data: Variant[]){

        //VALIDANDO OS DADOS RECEBIDOS
        if(!await new VariantValidation().execute(data, VariantArraySchema)){
            return new Result<Error, Variant[]>(new Error(), data, "Validation Error, Wrong Data!").fail();
        }


        //INSERINDO OS DADOS NO BANCO DE DADOS PELO REPOSITÓRIO
        const variantsCreated = await this.VariantRepository.addMany(data)
      
        
        if (!variantsCreated.count) {
            return new Result<Error, number>(new Error(), variantsCreated.count).fail();
        }

        return new Result<Error, number>(new Error(), variantsCreated.count).success();

    }



    async execute(data: Variant){
         
        //VALIDANDO OS DADOS RECEBIDOS
        if(!await new VariantValidation().execute(data, VariantSchema)){
            return new Result<Error, Variant>(new Error(), data, "Validation Error, Wrong Data!").fail();
        }


        //CRIO A VARIANTE
        const variant = Variant.create(
            '',
            data.productMainId,
            data.isActive,
            data.pictures,
            data.stock,
            data.priceCurrency,
            data.SKU,
            data.priceInCent,
            data.option,
            data.techDetails,
            data.onSale,
            data.createdAt
        );
         
        

        //INSERINDO OS DADOS NO BANCO DE DADOS PELO REPOSITÓRIO
        const variantCreated = await this.VariantRepository.add(variant)
      
        
        if (!variantCreated.id) {
            return new Result<Error, ReturnCreateVariantType>(new Error(), variantCreated).fail();
        }



        return new Result<Error, ReturnCreateVariantType>(new Error(), variantCreated).success();


    }

    }

    
