import { z } from "zod";

const option = z.object({
    title: z.string(),
    value: z.string()
});

const onSale = z.object({
    active: z.boolean(),
    percentage: z.number()
}).optional();

const techDetails = z.array(z.object({
    title: z.string(),
    text: z.string()
}));

export const VariantSchema = z.object({
    
    isActive: z.boolean(),
    pictures: z.array(z.string().url()),
    stock: z.number().nonnegative(),
    priceInCent: z.number().nonnegative(),
    priceCurrency: z.string().length(3),
    SKU: z.string().min(3),
    option: option,
    onSale: onSale,
    techDetails: techDetails,
    createdAt: z.date().optional()
});

export const VariantArraySchema = z.array(VariantSchema)