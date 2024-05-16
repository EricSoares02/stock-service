import express, {Request, Response, json} from 'express';
import ProductRepository from './infra/database/productRepository';
import SaveProduct from './appllication/usecases/SaveProduct';
import { HttpResponse, httpResponseStatus } from './infra/events/HttpResponse/http.response';
import { defaultReturnStatus } from './infra/events/errors/defaultError';
import cors from 'cors'
import { ManagerProduct } from './appllication/usecases/ManageProduct';
import { UpdateStock } from './appllication/usecases/ManagerStock';
import VariantRepository from './infra/database/variantRepository';



const app = express();
app.use(cors())
app.use(json());

const productRepository = new ProductRepository();



app.post('/save', async function(req:Request, res:Response) {
    
        const httpRes = new HttpResponse(res)
        const {status, error} = await new SaveProduct(productRepository).execute(req.body);
   
        if(status === defaultReturnStatus.fail){
            return httpRes.execute(httpResponseStatus['Bad Request'], error?.message ?? 'error')
        }
    
        return httpRes.execute(httpResponseStatus.Created, 'Successful')
});




app.put('/update', async function(req:Request, res:Response) {
    
        type paramsType ={
            id?: string,
            uptype?: string
        }

        const {id, uptype} = req.params as paramsType

        const {} = await new ManagerProduct().updateCamp()



})




app.put('/stock', async function(req:Request, res:Response) {
    
        const httpRes = new HttpResponse(res)
        const {status, error} = await new UpdateStock(new VariantRepository()).execute({
            stock: req.body.stock,
            variantId: req.body.id
        })

        if(status === defaultReturnStatus.fail){
            return httpRes.execute(httpResponseStatus['Bad Request'], error?.message ?? 'error')
        }

        return httpRes.execute(httpResponseStatus.Created, 'Successful')
})



app.get('/product', async function(req:Request, res:Response) {
    
})




app.get('/products/:param', async function(req:Request, res:Response) {
    
});




app.listen(3001);