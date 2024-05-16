import Product from "../../domain/entities/products";
import { CreateProductType } from "../../domain/types/product";



export interface IProductRepository{


    save(data: Product): Promise<CreateProductType>

    update(data: Product): Promise<void>

    get(productId: string): Promise<Partial<Product | null>>

    
}