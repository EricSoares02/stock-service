
import Product from '../../domain/entities/Products';
import { ReturnGetProductType } from '../../domain/types/product';
import { IdSchema } from '../../domain/validation/schemas/DefaultId';
import { categorySchema, descriptionSchema, nameSchema, subCategorySchema } from '../../domain/validation/schemas/Product';
import ValidationData from '../../domain/validation/validation';
import { Result } from '../../infra/events/errors/defaultError';
import ProductRepository from './../../infra/database/productRepository';


/*

price: async (data: any) => {
              
                if(!await new ValidationData().execute(data.id, IdSchema) || !await new ValidationData().execute(data.price, )){
                    return new Result<Error, string>(new Error(), "", "Invalid Data").fail();
                }

                const product = await this.ProductRepository.get(data.id);

                if (product?.description) {

                    product.description = data.description
                    await this.ProductRepository.update(product)
                    return new Result<Error, string>(new Error(), "").success();  
                }

                return new Result<Error, string>(new Error, '', 'This product dont exist').fail()
            },
      
            priceCurrency: async (data: any) => {
              
                if(!await new ValidationData().execute(data.id, IdSchema) || !await new ValidationData().execute(data.description, )){
                    return new Result<Error, string>(new Error(), "", "Invalid Data").fail();
                }

                const product = await this.ProductRepository.get(data.id);

                if (product?.description) {

                    product.description = data.description
                    await this.ProductRepository.update(product)
                    return new Result<Error, string>(new Error(), "").success();  
                }

                return new Result<Error, string>(new Error, '', 'This product dont exist').fail()
            },
**/


export type OperetionsType = 
|"name"
|"description"
|"category"
|"subcategory"

export class ManagerProduct{


    constructor(private ProductRepository: ProductRepository){

    }


    updateCamp(data: any, uptype: OperetionsType){

        const operations = {
            name: async (data: any) => {

                if(!await new ValidationData().execute(data.id, IdSchema) || !await new ValidationData().execute(data.name, nameSchema)){
                    return new Result<Error, string>(new Error(), "", "Invalid Data").fail();
                }

                const product = await this.ProductRepository.get(data.id);

                if (product?.name) {

                    product.name = data.name
                    await this.ProductRepository.update(product)
                    return new Result<Error, string>(new Error(), "").success();  
                }

                return new Result<Error, string>(new Error, '', 'This product dont exist').fail()
            },
      

            description: async (data: any) => {
                if(!await new ValidationData().execute(data.id, IdSchema) || !await new ValidationData().execute(data.description, descriptionSchema)){
                    return new Result<Error, string>(new Error(), "", "Invalid Data").fail();
                }

                const product = await this.ProductRepository.get(data.id);

                if (product?.description) {

                    product.description = data.description
                    await this.ProductRepository.update(product)
                    return new Result<Error, string>(new Error(), "").success();  
                }

                return new Result<Error, string>(new Error, '', 'This product dont exist').fail()
            },
      

            category: async (data: any) => {
                
                if(!await new ValidationData().execute(data.id, IdSchema) || !await new ValidationData().execute(data.category, categorySchema)){
                    return new Result<Error, string>(new Error(), "", "Invalid Data").fail();
                }

                const product = await this.ProductRepository.get(data.id);

                if (product?.category) {

                    product.category = data.category
                    await this.ProductRepository.update(product)
                    return new Result<Error, string>(new Error(), "").success();  
                }

                return new Result<Error, string>(new Error, '', 'This product dont exist').fail()
            },


            subcategory: async (data: any) => {
               
                if(!await new ValidationData().execute(data.id, IdSchema) || !await new ValidationData().execute(data.subCategory, subCategorySchema)){
                    return new Result<Error, string>(new Error(), "", "Invalid Data").fail();
                }

                const product = await this.ProductRepository.get(data.id);

                if (product?.subCategory) {

                    product.subCategory = data.subCategory
                    await this.ProductRepository.update(product)
                    return new Result<Error, string>(new Error(), "").success();  
                }

                return new Result<Error, string>(new Error, '', 'This product dont exist').fail()
            },
          };
      

          function updateProductData(data: any, operation: OperetionsType) {
            return operations[operation](data) ?? new Result<Error, string>(new Error(), "", 'Cannot Change this Camp').fail();
          }
      

          return updateProductData(data, uptype);

    }


    async getProduct(id: string){

        //VALIDANDO OS DADOS RECEBIDOS
        if(!await new ValidationData().execute(id, IdSchema)){
            return new Result<Error, string>(new Error(), id, "Validation Error, Wrong Data!").fail();
        }
   

        //FAZENDO ALTERAÇÃO
        const product = await this.ProductRepository.get(id)
      
        if (!product) {
            return new Result<Error, null>(new Error(), product, "Validation Error, Wrong Data!").fail()
        }

        return new Result<Error, ReturnGetProductType>(new Error(), product, "Validation Error, Wrong Data!").success()


    }



    async searchProducts(params: string){

         //VALIDANDO OS DADOS RECEBIDOS
         if(typeof params !== 'string'){
            return new Result<Error, string>(new Error(), params, "Validation Error, Wrong Data!").fail();
        }
   

        //Search
        const product = await this.ProductRepository.search(params)
      
        if (!product) {
            return new Result<Error, null>(new Error(), product, "Validation Error, Wrong Data!").fail()
        }

        return new Result<Error, {
            id: string;
            name: string;
            description: string;
            category: string;
            subCategory: string;
            UPC: number;
            createdAt: Date;
        }[]>(new Error(), product, "Validation Error, Wrong Data!").success()


    }
    

}