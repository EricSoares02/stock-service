import express, { Request, Response } from "express";
import cors from 'cors';
import { HttpResponse, httpResponseStatus } from "./infra/events/HttpResponse/http.response";
import SaveProduct from "./appllication/usecases/SaveProduct";
import { defaultReturnStatus } from "./infra/events/errors/defaultError";
import ProductRepository from "./infra/database/productRepository";
import { ManagerProduct, OperetionsType } from "./appllication/usecases/ManageProduct";
import VariantRepository from "./infra/database/variantRepository";
require("dotenv").config();


const app = express();

app.use(express.json());
app.use(cors());

const productRepository = new ProductRepository()
const variantRepository = new VariantRepository()

app.post("/save", async function(req: Request, res: Response){

    const httpRes = new HttpResponse(res);
    console.log('aui 1')
    const { status, error, success } = await new SaveProduct(productRepository).execute(
        req.body
    );
    console.log('aui ')
    if (status === defaultReturnStatus.fail) {
        return httpRes.execute(
            httpResponseStatus["Bad Request"],
            error?.message ?? "error"
        );
    }


    return httpRes.execute(httpResponseStatus.Created, "successful");
    
});



app.put('/product', async (req: Request, res: Response) => {
    
    type paramsType = {
        uptype: OperetionsType;
    };
  
    const httpRes = new HttpResponse(res);
    const { uptype } = req.params as paramsType;
    const { status, error } = await new ManagerProduct(
        productRepository,
        variantRepository
    ).updateCamp(req.body, uptype);
  
    if (status === defaultReturnStatus.fail) {
        return httpRes.execute(
          httpResponseStatus["Bad Request"],
          error?.message ?? "error"
        );
    }
  
    return httpRes.execute(httpResponseStatus.Created, "Successful");

})



app.get('/product/:id', async (req: Request, res: Response) => {
    
    const httpRes = new HttpResponse(res);
    const { status, error, success } = await new ManagerProduct(
        productRepository,
        variantRepository
    ).getProduct(req.params.id);

    if (status === defaultReturnStatus.fail) {
        return httpRes.execute(
            httpResponseStatus["Bad Request"],
            error?.message ?? "error"
        );
    }

    return httpRes.execute(httpResponseStatus.Ok, "Successful", success?.data);

});


app.get('/search/:params', async (req: Request, res: Response) => {
    
    const httpRes = new HttpResponse(res)
    const {status, error, success} = await new ManagerProduct(productRepository, variantRepository).searchProducts(req.params.param);

    if(status === defaultReturnStatus.fail){
        return httpRes.execute(httpResponseStatus['Bad Request'], error?.message ?? 'error');
    }

    return httpRes.execute(httpResponseStatus.Ok, 'Successful', success?.data);
});app


app.listen(process.env.PORT ?? 3001, ()=>console.info(`Server Running on Port: ${process.env.PORT}`))