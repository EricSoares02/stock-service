import Product from "../../domain/entities/products";


export interface IProductRepository{


    save(data: Product): Promise<void>

    update(data: Product): Promise<void>

    get(productId: string): Promise<Partial<Product | null>>

    
}