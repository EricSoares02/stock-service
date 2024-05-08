 type OptionType = {
    title: string,
    value: string
  }

  type onSaleType =  {
    //promoção
     active: boolean;
     percentage: number;
  }

  type techDetailsType = {
    //detalhes tecnicos
    readonly title: string;
    readonly text: string;
  }

export default class ProductVariant {
  private constructor(
    readonly id: string, 
    readonly idMainProduct: string,
    readonly isActive: boolean,
    readonly pictures: string[],
    readonly stock: number,
    readonly priceInCent: number,
    readonly option: OptionType,
    readonly onSale: onSaleType,  
    readonly techDetails: techDetailsType[],
    readonly createdAt: Date
  
  ) {}

  static create(
    id: string,
    idMainProduct: string,
    isActive: boolean,
    pictures: string[],
    stock: number,
    priceInCent: number,
    option: OptionType,
    onSale: onSaleType,  
    techDetails: techDetailsType[],
    createdAt: Date
) {
    return new ProductVariant(
        id,
        idMainProduct,
        isActive,
        pictures,
        stock,
        priceInCent,
        option ,
        onSale,  
        techDetails,
        createdAt
    );
  }

  get() {

    return {
        id: this.id,
        idMainProduct: this.idMainProduct,
        isActive: this.isActive,
        pictures: this.pictures,
        stock: this.stock,
        priceInCent: this.priceInCent,
        option: this.option ,
        onSale: this.onSale,  
        techDetails: this.techDetails,
        createdAt: this.createdAt
    }
  }
}