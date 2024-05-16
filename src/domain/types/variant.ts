import { JsonValue } from "@prisma/client/runtime/library";

export type ReturnCreateVariantType = {
  id: string;
  productMainId: string;
  isActive: boolean;
  pictures: string[];
  stock: number;
  priceCurrency: string;
  SKU: string;
  priceInCent: number;
  option: JsonValue;
  onSale: JsonValue;
  techDetails: JsonValue[];
  createdAt: Date;
};
