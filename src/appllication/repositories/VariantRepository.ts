
import { Prisma } from '@prisma/client';
import ProductVariant from './../../domain/entities/Variants';
import { ReturnCreateVariantType } from '../../domain/types/variant';


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


    add(data: ProductVariant): Promise<ReturnCreateVariantType>

    update(data: ProductVariant): Promise<IVariant>

    get(productVariantId: string): Promise<IVariant | null>

}