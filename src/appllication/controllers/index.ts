import { Request, Response } from "express";
import ProductRepository from "../../infra/database/productRepository";
import VariantRepository from "../../infra/database/variantRepository";
import {
  HttpResponse,
  httpResponseStatus,
} from "../../infra/events/HttpResponse/http.response";
import { defaultReturnStatus } from "../../infra/events/errors/defaultError";
import SaveProduct from "../usecases/SaveProduct";
import { ManagerProduct, OperetionsType } from "../usecases/ManageProduct";

const productRepository = new ProductRepository();
const variantRepository = new VariantRepository();

export class ProductController {
   async save(res: Response, req: Request) {
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
  }

  async update(req: Request, res: Response) {
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
  }

  async get(req: Request, res: Response) {
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
  }

  async search(req:Request, res:Response) {
 
    const httpRes = new HttpResponse(res)
    const {status, error, success} = await new ManagerProduct(productRepository, variantRepository).searchProducts(req.params.param)
    
    if(status === defaultReturnStatus.fail){
        return httpRes.execute(httpResponseStatus['Bad Request'], error?.message ?? 'error')
    }
    
    return httpRes.execute(httpResponseStatus.Ok, 'Successful', success?.data)
    }
}
