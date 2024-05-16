
import ProductRepository from './../../infra/database/productRepository';



export class ManagerProduct{


    constructor(private ProductRepository: ProductRepository){

    }


    updateCamp(data: any, uptype: string){

        
        //VALIDANDO OS DADOS RECEBIDOS
        if(!await new ProductValidation().execute(data, ProductSchema)){
            return new Result<Error, Product>(new Error(), data, "Validation Error, Wrong Data!").fail();
        }


        //CRIO O PRODUTO
        const product = Product.create("", data.name, data.description, data.category, data.subCategory, data.UPC, data.variants, data.createdAt)
         
        

        //INSERINDO OS DADOS NO BANCO DE DADOS PELO REPOSITÓRIO
        const productCreated = await this.ProductRepository.save(product)
      


        //SE OS DADOS GERAIS FORAM INSERIDOS, INSERIMOS AS VARIANTES DO PRODUTO NO DB
        if (productCreated.id) {
            const variants: ProductVariant[] = []
            
            for (let index = 0; index < data.variants.length; index++) {
                variants.push(
                    ProductVariant.create(
                    data.variants[index].id, 
                    productCreated.id,
                    data.variants[index].isActive,
                    data.variants[index].pictures,
                    data.variants[index].stock,
                    data.variants[index].priceCurrency,
                    data.variants[index].SKU,
                    data.variants[index].priceInCent,
                    data.variants[index].option,
                    data.variants[index].techDetails,
                    data.variants[index].onSale,
                    data.variants[index].createdAt
                    )
                )            
            }      
            
            new AddVariant(new VariantRepository()).executeMany(variants); 
        }


        return new Result<Error, CreateProductType>(new Error(), productCreated).success();





    }


    
    




}