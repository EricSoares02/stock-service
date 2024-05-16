import ProductVariant from "./Variants";

export default class Product {
  private constructor(
    readonly id: string,
    readonly name: string,
    readonly description: string,
    readonly category: string,
    readonly subCategory: string,
    readonly UPC: number,
    readonly variants: ProductVariant[],
    readonly createdAt: Date
  )
  {}

  static create(
    id: string,
    name: string,
    description: string,
    category: string,
    subCategory: string,
    UPC: number,
    variants: ProductVariant[],
    createdAt: Date
  ) {
    return new Product(
      id,
      name,
      description,
      category,
      subCategory,
      UPC,
      variants,
      createdAt
    );
  }

}
