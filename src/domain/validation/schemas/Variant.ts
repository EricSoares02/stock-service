import { z } from "zod";

const option = z.object({
    title: z.string(),
    value: z.string()
});

const onSale = z.object({
    active: z.boolean(),
    percentage: z.number()
}).optional();

const techDetails = z.object({
    title: z.string(),
    text: z.string()
}).array();

export const VariantSchema = z.object({
    productMainId: z.string().length(24),
    isActive: z.boolean(),
    pictures: z.string().url().array(),
    stock: z.number().nonnegative(),
    priceInCent: z.number().nonnegative(),
    option: option,
    onSale: onSale,
    techDetails: techDetails,
    createdAt: z.date().optional()
});