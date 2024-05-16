import { z } from "zod";
import { VariantSchema } from "./Variant";


export const ProductSchema = z.object({
    
    name: z.string(),
    description: z.string(),
    category: z.string(),
    subCategory: z.string(),
    variants: z.array(VariantSchema),
    UPC: z.number(),
    createdAt: z.date().optional()
})