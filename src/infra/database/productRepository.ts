
import Product from '../../domain/entities/products';
import { CreateProductType } from '../../domain/types/product';
import { IProductRepository } from './../../appllication/repositories/ProductRepository';
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



    async update(product: Product): Promise<void> {
        const db = new DatabaseManager();
        db.excecuteConnection();
        const {variants: variant, ...data} = product
        await db.tables().products.update({
            where: {
                id: data.id
            },
            data
        }).finally(()=>db.executeDisconnection());
    }



    async get(id: string): Promise<Partial<Product | null>> {
        const db = new DatabaseManager();
        db.excecuteConnection()
        const product = await db.tables().products.findFirst({
            where: {
                id
            }
        }).finally(()=>db.executeDisconnection());

   
        return product
    }

}