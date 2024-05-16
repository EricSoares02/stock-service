import express, {Request, Response, json} from 'express';
import ProductRepository from './infra/database/productRepository';
import SaveProduct from './appllication/usecases/SaveProduct';
import { HttpResponse, httpResponseStatus } from './infra/events/HttpResponse/http.response';
import { defaultReturnStatus } from './infra/events/errors/defaultError';




const app = express();
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



app.get('/product', async function(req:Request, res:Response) {
    
})


app.get('/products/:param', async function(req:Request, res:Response) {
    
});



app.put('/product', async function(req:Request, res:Response) {
    
})


app.listen(3001);