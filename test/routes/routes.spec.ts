import axios from "axios";


describe('testing routes cycle', ()=>{


  const url = `${process.env.URL_FOR_TEST}${process.env.PORT}` 

  const variant = {
    id: "stwtew",
    //productMainId: "gwa",
    isActive: false,
    pictures: ["daeorfaop"],
    stock: 22,
    priceInCent: 2341,
    priceCurrency: "BRL",
    SKU: "J234K432", //Stock Keeping Unit (Unidade de Manutenção de Estoque),
    option: {
      title: "DASD",
      value: "ofrajfa",
    },
    onSale: {
      active: false,
      percentage: 54,
    },
    techDetails: [
      {
        title: "das",
        text: "fasf",
      },
    ],
    //createdAt: Date(),
  }

  const product = {

    id: "afra34131a",
    name: "example",
    description: "example",
    category: "example",
    subCategory: "example",
    variants: variant,
    //createdAt: Date(),
    UPC: 123456789101, //Universal product code (codigo de barra)
  }

  let productSaved = {
    id: ''
  }


  describe("test the post products routes", () => {

    it('should return error when trying save a product with wrong data', async ()=>{

      const {name: name, ...prod} = product
  
      const response = await axios.post(`${url}/save`, prod);
  
        expect(response.status).toBe(400);
        expect(typeof response.data).toBe("string");
  
    })
  
  
    it('should save product', async ()=>{
  
      const response = await axios.post(`${url}/save`, product);
  
        expect(response.status).toBe(201);
        expect(response.data).toBe("Successful");
        productSaved = response.data
    })
  
  
    it('should not save a repeat product', async ()=>{
      
      const response = await axios.post(`${url}/save`, product);
  
        expect(response.status).toBe(400);
        expect(typeof response.data).toBe("string");
    })
  });
  

  describe("test the get products routes", () => {
    
    const getProduct = {
      id: "afra34131a",
      name: "example",
      description: "example",
      category: "example",
      subCategory: "example",
      variants: [{
        id: "stwtew",
        productMainId: "gwa",
        isActive: false,
        pictures: ["daeorfaop"],
        stock: 22,
        priceInCent: 2341,
        priceCurrency: "BRL",
        SKU: "J234K432", //Stock Keeping Unit (Unidade de Manutenção de Estoque),
        option: {},
        onSale: {},
        techDetails: {},
        createdAt: Date,
      }],
      createdAt: Date,
      UPC: 123456789101, //Universal product code (codigo de barra)
    };


    it('should return a product', async ()=>{

    const response = await axios.get(`${url}/product/${productSaved.id}`);

      expect(response.status).toBe(200);
      expect(response.data).toBeInstanceOf(getProduct);
    })


    it('should return an error when trying get product', async ()=>{
      const response = await axios.get(`${url}/product/aihfuiqoyfas321`);

      expect(response.status).toBe(400);
      expect(typeof response.data).toBe('string');
    })


    it('should return not found error when trying get product', async ()=>{
      const response = await axios.get(`${url}/product/654448193d960585bae3797a`);

      expect(response.status).toBe(404);
      expect(response.data).toBe('Not found');
    })


    it('should return a product array', async ()=>{
      const response = await axios.get(`${url}/products/example`);

        expect(response.status).toBe(200);
        expect(response.data).toBeInstanceOf(getProduct);
    })


    it('should return an error when trying search specifics products', async ()=>{
      const response = await axios.get(`${url}/products/fqgrpqtr8ywqr324929qe`);

      expect(response.status).toBe(200);
      expect(typeof response.data).toBe('string');
    })
  });


  describe("test the update products routes", () => {
    
    it('should update product', async ()=>{
      const response = await axios.put(`${url}/product?id=${productSaved.id}&uptype=name`);
  
      expect(response.status).toBe(200);
      expect(response.data).toBe('Successful');
    })
    
  
    it('should return an error when trying update product', async ()=>{
      const response = await axios.put(`${url}/product?id=${productSaved.id}&uptype=nothingonlyatest`);
  
      expect(response.status).toBe(400);
      expect(typeof response.data).toBe('string');
    })
  
  });

})