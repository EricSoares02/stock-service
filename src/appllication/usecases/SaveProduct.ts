import Product from "../../domain/entities/products";
import ProductValidation from "../../domain/validation/productValidation";
import { ProductSchema } from './../../domain/validation/schemas/Product';
import ProductRepository from './../../infra/database/productRepository';


export default class SaveProduct{


    constructor(private ProductRepository: ProductRepository){}

    
    async execute(data: Product){

        const product = Product.create(data.id, data.name, data.description, data.category, data.subCategory, data.variants, data.createdAt)

        ProductValidation.execute(product, ProductSchema);

        //  busco a categoria e subcategoria no serveless
        
       await this.ProductRepository.save(product)

        // chamo a classe de salvar variantes do produto


    }



}