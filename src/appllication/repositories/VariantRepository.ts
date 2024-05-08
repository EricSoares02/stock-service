
import { Prisma } from '@prisma/client';
import ProductVariant from './../../domain/entities/Variants';


export interface IVariant {
    id: string;
    productMainId: string;
    isActive: boolean;
    pictures: string[];
    stock: number;
    priceInCent: number;
    option: Prisma.JsonValue;
    onSale: Prisma.JsonValue;
    techDetails: Prisma.JsonValue[];
    createdAt: Date;
} 

export interface IVariantRepository{


    add(data: ProductVariant): Promise<void>

    update(data: ProductVariant): Promise<void>

    get(productVariantId: string): Promise<IVariant | null>

}