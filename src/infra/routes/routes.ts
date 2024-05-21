import { Request, Response, Router } from "express";
import { ManagerProduct, OperetionsType } from "../../appllication/usecases/ManageProduct";
import SaveProduct from "../../appllication/usecases/SaveProduct";
import ProductRepository from "../database/productRepository";
import VariantRepository from "../database/variantRepository";
import { HttpResponse, httpResponseStatus } from "../events/HttpResponse/http.response";
import { defaultReturnStatus } from "../events/errors/defaultError";
import { SetupRabbitMQ } from "../messages/broker/rabbitMQ";


const productRepository = new ProductRepository()
const variantRepository = new VariantRepository()

export const router = Router();

const producer = new SetupRabbitMQ();

router.post("/save", async function(req: Request, res: Response){

    const httpRes = new HttpResponse(res);
    const { status, error, success} = await new SaveProduct(productRepository).execute(
        req.body
    );
    
    if (status === defaultReturnStatus.fail) {
        return httpRes.execute(
            httpResponseStatus["Bad Request"],
            error?.message ?? "error"
        );
    }

    const payload = await new ManagerProduct(productRepository, variantRepository).getProduct(success?.data.id ?? '')
    producer.sendMessage(payload.success?.data);
    return httpRes.execute(httpResponseStatus.Created, "successful");
    
});



router.put('/product', async (req: Request, res: Response) => {
    
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



router.get('/product/:id', async (req: Request, res: Response) => {
    
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


router.get('/search/:params', async (req: Request, res: Response) => {
    
    const httpRes = new HttpResponse(res)
    const {status, error, success} = await new ManagerProduct(productRepository, variantRepository).searchProducts(req.params.param);

    if(status === defaultReturnStatus.fail){
        return httpRes.execute(httpResponseStatus['Bad Request'], error?.message ?? 'error');
    }

    return httpRes.execute(httpResponseStatus.Ok, 'Successful', success?.data);
});