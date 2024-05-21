import { Request, Response } from "express";
import { SetupServer } from "./server";
import { HttpResponse, httpResponseStatus } from "./infra/events/HttpResponse/http.response";
import SaveProduct from "./appllication/usecases/SaveProduct";
import ProductRepository from "./infra/database/productRepository";
import VariantRepository from "./infra/database/variantRepository";
import { defaultReturnStatus } from "./infra/events/errors/defaultError";
import { ManagerProduct, OperetionsType } from "./appllication/usecases/ManageProduct";
require("dotenv").config();


const productRepository = new ProductRepository();
const variantRepository = new VariantRepository();

(async (): Promise<void> => {
 const server = new SetupServer(3001);

    server.getApp().post("/product", async (req: Request, res: Response) => {


        const httpRes = new HttpResponse(res);
        const { status, error } = await new SaveProduct(productRepository).execute(
          req.body
        );
    
        if (status === defaultReturnStatus.fail) {
          return httpRes.execute(
            httpResponseStatus["Bad Request"],
            error?.message ?? "error"
          );
        }
    
        return httpRes.execute(httpResponseStatus.Created, "successful");

    });



    server.getApp().put('/product', async (req: Request, res: Response) => {
        
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



    server.getApp().get('/product/:id', async (req: Request, res: Response) => {
        
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

    })



    server.getApp().get('/search/:params', async (req: Request, res: Response) => {
        
        const httpRes = new HttpResponse(res)
        const {status, error, success} = await new ManagerProduct(productRepository, variantRepository).searchProducts(req.params.param);
    
        if(status === defaultReturnStatus.fail){
            return httpRes.execute(httpResponseStatus['Bad Request'], error?.message ?? 'error');
        }
    
        return httpRes.execute(httpResponseStatus.Ok, 'Successful', success?.data);
    })


})();
