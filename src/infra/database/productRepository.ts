
import Product from '../../domain/entities/products';
import { IProductRepository } from './../../appllication/repositories/ProductRepository';
import DatabaseManager from './database';


export default class ProductRepository implements IProductRepository{
    

    async save(product: Product): Promise<void> {
        const db = new DatabaseManager();
        db.excecuteConnection();
        const {variants: variant, ...data} = product
        await db.tables().products.create({
            data
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