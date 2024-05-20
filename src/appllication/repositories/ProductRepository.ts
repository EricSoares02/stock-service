import Product from "../../domain/entities/Products";
import { CreateProductType, ReturnGetProductType } from "../../domain/types/product";

export type UpdateParamsType ={
     id: string,
     name: string,
     description: string,
     category: string,
     subCategory: string,
     UPC: number,
     createdAt: Date
}

export interface IProductRepository{


    save(data: Product): Promise<CreateProductType>

    update(data: UpdateParamsType): Promise<void>

    get(productId: string): Promise<ReturnGetProductType | null>

    
}