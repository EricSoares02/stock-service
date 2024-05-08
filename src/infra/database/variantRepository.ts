import { IVariant, IVariantRepository } from "../../appllication/repositories/VariantRepository";
import ProductVariant from "../../domain/entities/Variants";
import DatabaseManager from "./database";



export default class VariantRepository implements IVariantRepository{


    async add(data: ProductVariant): Promise<void> {
        const db = new DatabaseManager();
        db.excecuteConnection();
        await db.tables().variants.create({data}).finally(()=>db.executeDisconnection());

    }


    async update(data: ProductVariant): Promise<void> {
        const db = new DatabaseManager();
        db.excecuteConnection();
        await db.tables().variants.update({
            where:{
                id: data.id,
            },
            data
        }).finally(()=>db.executeDisconnection());
    }


    async get(productVariantId: string): Promise<IVariant | null> {
        const db = new DatabaseManager();
        db.excecuteConnection();
        const variant = await db.tables().variants.findFirst(
            {
                where: {
                    id: productVariantId
                }
            }
        ).finally(()=>db.executeDisconnection());

        return variant
    }

}