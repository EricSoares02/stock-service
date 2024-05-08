import ProductVariant from "./Variants";

export default class DefaultProduct {
  private constructor(
    readonly id: string,
    readonly name: string,
    readonly description: string,
    readonly category: string,
    readonly subCategory: string,
    readonly variants: ProductVariant[],
    readonly createdAt: Date
  ) // readonly Options: [
  //   {
  //     name: string,
  //     option: string[]
  //   }
  // ],
  {}

  static create(
    id: string,
    name: string,
    description: string,
    category: string,
    subCategory: string,
    variants: ProductVariant[],
    createdAt: Date
  ) {
    return new DefaultProduct(
      id,
      name,
      description,
      category,
      subCategory,
      variants,
      createdAt
    );
  }

  use() {}
}
