
import Product from '../../domain/entities/Products';
import { CreateProductType, ReturnGetProductType } from '../../domain/types/product';
import { IProductRepository, UpdateParamsType } from './../../appllication/repositories/ProductRepository';
import DatabaseManager from './database';



export default class ProductRepository implements IProductRepository{
    

    async save(product: Product): Promise<CreateProductType> {
        const db = new DatabaseManager();
        db.excecuteConnection();
        const {variants: variant, ...data} = product
        return await db.tables().products.create({
            data:{
                category: data.category,
                description: data.description,
                name: data.name,
                subCategory: data.subCategory,
                UPC: data.UPC
            }
        }).finally(()=>db.executeDisconnection());


    }



    async update(data: UpdateParamsType): Promise<void> {
        const db = new DatabaseManager();
        db.excecuteConnection();
        await db.tables().products.update({
            where: {
                id: data.id
            },
            data
        }).finally(()=>db.executeDisconnection());
    }



    async get(id: string): Promise<ReturnGetProductType | null> {
        const db = new DatabaseManager();
        db.excecuteConnection()
        const product = await db.tables().products.findFirst({
            where:{
                id
            }
        }).finally(()=>db.executeDisconnection());

   
        db.excecuteConnection()
        const variants = await db.tables().variants.findMany({
            where:{
               productMainId: id 
            }
        }).finally(()=>db.executeDisconnection());


        
        if(product?.id && variants.length>0){
            return {
                id: id,
                name: product.name,
                description: product.description,
                category: product.category,
                subCategory: product.subCategory,
                UPC: product.UPC,
                variants: variants,
                createdAt:product.createdAt
            }
            
        }

        return null
        
    }


    async search(params: string){
        const db = new DatabaseManager();
        db.excecuteConnection()
        const product = await db.tables().products.findMany({
            where:{
                OR: [
                    {category: params},
                    {subCategory: params},
                    {UPC: parseInt(params)},
                    {name: params},
                    {variants: {
                        every: {
                            isActive: true
                        }
                    }}
                ]
            }
        }).finally(()=>db.executeDisconnection());
        
       return product
        
    }


}