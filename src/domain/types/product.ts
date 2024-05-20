import { JsonValue } from "@prisma/client/runtime/library";


export type CreateProductType = {
    id: string; 
    name: string; 
    description: string; 
    category: string; 
    subCategory: string; 
    createdAt: Date;
}


export type ReturnGetProductType = {
    id: string,
    name: string,
    description: string,
    category: string,
    subCategory: string,
    UPC: number,
    variants: { id: string; productMainId: string; isActive: boolean; pictures: string[]; stock: number; priceCurrency: string; SKU: string; priceInCent: number; option: JsonValue; onSale: JsonValue; techDetails: JsonValue[]; createdAt: Date; }[],
    createdAt: Date
}
