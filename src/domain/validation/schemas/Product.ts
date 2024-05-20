import { z } from "zod";
import { VariantSchema } from "./Variant";



export const nameSchema =  z.string();
export const descriptionSchema =  z.string();
export const categorySchema =  z.string();
export const subCategorySchema =  z.string();

export const ProductSchema = z.object({
    
    name: nameSchema,
    description: descriptionSchema,
    category: categorySchema,
    subCategory: subCategorySchema,
    variants: z.array(VariantSchema),
    UPC: z.number(),
    createdAt: z.date().optional()
})