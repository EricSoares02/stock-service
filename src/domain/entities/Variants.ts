 export type OptionType = {
    title: string,
    value: string
  }

  export type onSaleType =  {
    //promoção
    active: boolean;
    percentage: number;
  }

 export type techDetailsType = {
    //detalhes tecnicos
    title: string;
    text: string;
  }
  
      
     
    
export default class Variant {
  private constructor(
    readonly id: string, 
    readonly productMainId: string,
    readonly isActive: boolean,
    readonly pictures: string[],
    readonly stock: number,
    readonly priceCurrency: string,
    readonly SKU: string,
    readonly priceInCent: number,
    readonly option: OptionType,
    readonly techDetails: techDetailsType[],
    readonly onSale?: onSaleType, 
    readonly createdAt?: Date,
  ) {}

  static create(
    id: string,
    productMainId: string,
    isActive: boolean,
    pictures: string[],
    stock: number,
    priceCurrency: string,
    SKU: string,
    priceInCent: number,
    option: OptionType,
    techDetails: techDetailsType[],
    onSale?: onSaleType,  
    createdAt?: Date
) {
    return new Variant(
        id,
        productMainId,
        isActive,
        pictures,
        stock,
        priceCurrency,
        SKU,
        priceInCent,
        option ,
        techDetails,
        onSale,  
        createdAt
    );
  }

  // static get() {

  //   return {
  //       id: this.id,
  //       idMainProduct: this.productMainId,
  //       isActive: this.isActive,
  //       pictures: this.pictures,
  //       stock: this.stock,
  //       priceInCent: this.priceInCent,
  //       option: this.option ,
  //       onSale: this.onSale,  
  //       techDetails: this.techDetails,
  //       createdAt: this.createdAt
  //   }
  // }
}
