import { IVariant, IVariantRepository } from "../../appllication/repositories/VariantRepository";
import Variant from "../../domain/entities/Variants";
import { ReturnCreateVariantType } from "../../domain/types/variant";
import DatabaseManager from "./database";



export default class VariantRepository implements IVariantRepository{


    async add(data: Variant): Promise<ReturnCreateVariantType> {
        const db = new DatabaseManager();
        db.excecuteConnection();
        return await db.tables().variants.create({data}).finally(()=>db.executeDisconnection());

    }


    async update(data: any): Promise<IVariant> {
        const db = new DatabaseManager();
        db.excecuteConnection();
        return await db.tables().variants.update({
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


    async addMany(data: Array<Variant>){
        const db = new DatabaseManager();
        db.excecuteConnection();
        return await db.tables().variants.createMany({data}).finally(()=>db.executeDisconnection());
    }
}